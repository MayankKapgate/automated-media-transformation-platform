export type TransformationType = 'crop' | 'grayscale';

export const TRANSFORMATIONS: Record<TransformationType, string> = {
  crop: 'w_500,h_500,c_crop',
  grayscale: 'e_grayscale',
};

export function addTransformation(url: string, transformation: string): string {
  return url.replace('/upload/', `/upload/${transformation}/`);
}

export function removeTransformation(url: string, transformation: string): string {
  return url.replace(`/${transformation}`, '');
}

export function hasTransformation(url: string, transformation: string): boolean {
  return url.includes(`/${transformation}/`);
}

export function toggleTransformation(url: string, transformation: string): string {
  if (hasTransformation(url, transformation)) {
    return removeTransformation(url, transformation);
  }
  return addTransformation(url, transformation);
}
