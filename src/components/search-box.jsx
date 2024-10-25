'use client';

import { env } from '@/env';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export default function SearchBox() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  const fetchMovies = async (query) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${env.NEXT_PUBLIC_TMDB_API_BASE_URL}/search/movie?api_key=${env.NEXT_PUBLIC_TMDB_API_KEY}&query=${encodeURIComponent(query)}`
      );
      const data = await response.json();

      setSearchResults(data.results);
      setShowModal(true);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const debouncedFetchMovies = useDebouncedCallback((query) => {
    if (query.trim().length > 0) {
      fetchMovies(query);
    } else {
      setShowModal(false);
    }
  }, 300);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedFetchMovies(query);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputFocus = () => {
    if (searchQuery.trim().length > 0) {
      fetchMovies(searchQuery);
    }
  };

  return (
    <div className="relative mx-6 max-w-xl flex-1" ref={searchRef}>
      <input
        type="search"
        placeholder="Search Movies..."
        value={searchQuery}
        onChange={handleSearchChange}
        onFocus={handleInputFocus}
        ref={inputRef}
        className="w-full rounded-full bg-gray-100 px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200 dark:focus:ring-blue-400"
      />

      {showModal && (
        <div className="absolute left-0 right-0 z-10 mt-2 rounded-md bg-popover shadow-lg dark:bg-gray-900">
          {isLoading ? (
            <div className="p-4 text-center text-muted-foreground">
              Loading...
            </div>
          ) : searchResults.length > 0 ? (
            <ul className="max-h-96 overflow-y-auto py-2">
              {searchResults.map((movie) => (
                <li
                  onClick={() => setShowModal(false)}
                  key={movie.id}
                  className="px-4 py-2 hover:bg-accent"
                >
                  <Link
                    href={`/movies/${movie.id}`}
                    className="flex items-center space-x-4"
                  >
                    <Image
                      src={`${env.NEXT_PUBLIC_TMDB_IMAGE_URL}/w92${movie.poster_path}`}
                      alt={movie.title}
                      width={46}
                      height={69}
                      className="rounded"
                    />
                    <span className="text-sm text-foreground">
                      {movie.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-4 text-center text-muted-foreground">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
