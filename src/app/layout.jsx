import Navbar from '@/components/nav-bar';
import ProviderWrapper from '@/providers/provider-wrapper';
import './globals.css';

export const metadata = {
  title: 'Movie App',
  description:
    'This is a simple movie app where you can search movies, get details of each movie, and make a wishlist of the movies.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProviderWrapper>
          <Navbar />
          <main className="container mx-auto px-4 py-8">{children}</main>
        </ProviderWrapper>
      </body>
    </html>
  );
}
