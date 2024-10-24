import Link from 'next/link';
import ThemeToggle from './theme-toggle';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg dark:bg-gray-900">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-gray-800 dark:text-white">
            MovieApp
          </span>
        </Link>

        {/* Search Box */}
        <div className="mx-6 max-w-md flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Search movies..."
              className="w-full rounded-full bg-gray-100 px-4 py-2 pr-10 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200 dark:focus:ring-blue-400"
            />
            <svg
              className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 dark:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Watchlist Link */}
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
