import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MediaForge — Automated Media Transformation Platform',
  description: 'Upload, transform, and manage your media assets with powerful Cloudinary-powered transformations. Crop, apply effects, and more.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
