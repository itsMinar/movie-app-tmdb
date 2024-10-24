import Link from 'next/link';
import ThemeToggle from './theme-toggle';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="ml-2 text-2xl font-semibold text-gray-800">
            MovieApp
          </span>
        </Link>

        {/* Search Box */}
        <div className="mx-6 flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-full border border-gray-300 px-4 py-2 shadow-sm transition duration-300 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Wishlist Link */}
        <div className="pr-4">
          <Link
            href="/wishlist"
            className="font-medium text-gray-800 transition duration-300 ease-in-out hover:text-blue-500"
          >
            Wishlist
          </Link>
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
