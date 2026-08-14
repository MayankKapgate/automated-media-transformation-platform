'use client';

import { useState } from 'react';
import UploadForm from '@/components/UploadForm';
import ImageGallery from '@/components/ImageGallery';

export default function Home() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleUploadSuccess = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen">
      {/* Ambient Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center shadow-lg shadow-brand-500/20">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg font-bold text-white tracking-tight">MediaForge</h1>
                <p className="text-[11px] text-surface-500 font-medium tracking-wider uppercase">Transform Platform</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-400 font-medium">Connected</span>
              </span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-10">
          {/* Hero */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Transform Your Media
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">
                In Real Time
              </span>
            </h2>
            <p className="text-surface-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Upload images and apply powerful Cloudinary transformations instantly.
              Crop, apply grayscale effects, and more — all from your browser.
            </p>
          </div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1">
              <UploadForm onUploadSuccess={handleUploadSuccess} />
            </div>
            <div className="lg:col-span-2">
              <ImageGallery refreshTrigger={refreshTrigger} />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 mt-auto">
          <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
            <p className="text-xs text-surface-600">
              © {new Date().getFullYear()} MediaForge. Powered by Cloudinary & Next.js
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-surface-600">Prisma ORM</span>
              <span className="text-xs text-surface-700">•</span>
              <span className="text-xs text-surface-600">PostgreSQL</span>
              <span className="text-xs text-surface-700">•</span>
              <span className="text-xs text-surface-600">Tailwind CSS</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
