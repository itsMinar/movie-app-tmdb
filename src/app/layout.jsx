import './globals.css';

export const metadata = {
  title: 'Movie App',
  description:
    'This is a simple movie app where you can search movies, get details of each movie, and make a wishlist of the movies.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
