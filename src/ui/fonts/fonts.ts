import { Figtree, Inter } from 'next/font/google';

export const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--base-font',
  style: 'normal',
  preload: true,
  fallback: ['system-ui', 'arial', 'sans-serif']
});

export const inter = Inter({
  subsets: ['cyrillic', 'latin'],
  weight: ['400'],
  display: 'swap',
  style: 'normal',
  preload: true,
  fallback: ['system-ui', 'arial', 'sans-serif']
});
