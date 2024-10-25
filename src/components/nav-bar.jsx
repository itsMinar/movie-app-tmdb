import Link from 'next/link';
import SearchBox from './search-box';
import ThemeToggle from './theme-toggle';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg dark:bg-gray-900">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-gray-800 dark:text-white">
            MovieApp
          </span>
        </Link>

        <SearchBox />

        <div className="flex items-center space-x-4">
          <Link
            href="/watchlist"
            className="font-medium text-gray-600 transition duration-300 ease-in-out hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
          >
            Watchlist
          </Link>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
