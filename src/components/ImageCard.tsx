'use client';

import { useState } from 'react';
import { TRANSFORMATIONS, toggleTransformation, type TransformationType } from '@/lib/transformations';

interface ImageCardProps {
  id: string;
  cloudinaryUrl: string;
  publicId: string | null;
  createdAt: string;
  userName?: string;
  index: number;
}

export default function ImageCard({ id, cloudinaryUrl, createdAt, index }: ImageCardProps) {
  const [displayUrl, setDisplayUrl] = useState(cloudinaryUrl);
  const [activeTransforms, setActiveTransforms] = useState<Set<TransformationType>>(new Set());
  const [imageLoading, setImageLoading] = useState(true);

  const handleTransform = (type: TransformationType) => {
    const transformation = TRANSFORMATIONS[type];
    const newUrl = toggleTransformation(displayUrl, transformation);
    setDisplayUrl(newUrl);
    setImageLoading(true);

    setActiveTransforms((prev) => {
      const next = new Set(prev);
      if (next.has(type)) {
        next.delete(type);
      } else {
        next.add(type);
      }
      return next;
    });
  };

  const isActive = (type: TransformationType) => activeTransforms.has(type);

  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div
      className="glass-card overflow-hidden glow stagger-item"
      style={{ animationDelay: `${index * 0.1}s` }}
      id={`image-card-${id}`}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-surface-900">
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <img
          src={displayUrl}
          alt={`Image ${id}`}
          className={`image-transform w-full h-full object-cover ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setImageLoading(false)}
          onError={() => setImageLoading(false)}
        />

        {/* Active transforms badge */}
        {activeTransforms.size > 0 && (
          <div className="absolute top-3 right-3 flex gap-1.5">
            {Array.from(activeTransforms).map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-[10px] font-semibold uppercase rounded-full bg-brand-600/80 text-white backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Card Footer */}
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-surface-500">{formattedDate}</span>
          <span className="text-[10px] text-surface-600 font-mono truncate max-w-[120px]" title={id}>
            {id.slice(0, 8)}...
          </span>
        </div>

        {/* Transform Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => handleTransform('crop')}
            className={`btn-ghost flex-1 flex items-center justify-center gap-1.5 ${isActive('crop') ? 'active' : ''}`}
            id={`crop-btn-${id}`}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 3v4a1 1 0 001 1h10m-3 8v4m-8-4H3m18-4h-4a1 1 0 01-1-1V3" />
            </svg>
            Crop
          </button>
          <button
            onClick={() => handleTransform('grayscale')}
            className={`btn-ghost flex-1 flex items-center justify-center gap-1.5 ${isActive('grayscale') ? 'active' : ''}`}
            id={`grayscale-btn-${id}`}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
            </svg>
            Grayscale
          </button>
        </div>
      </div>
    </div>
  );
}
