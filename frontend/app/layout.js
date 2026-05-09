import './globals.css';

export const metadata = {
  title: 'Mahosh Fragrance | Luxury Perfume House',
  description:
    'Discover Mahosh Fragrance, a premium perfume brand crafting cinematic extrait, eau de parfum, and signature scents.',
  keywords: ['luxury perfume', 'Mahosh Fragrance', 'premium fragrance', 'oud perfume', 'designer scent'],
  openGraph: {
    title: 'Mahosh Fragrance',
    description: 'A luxury fragrance house for modern signature scents.',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
