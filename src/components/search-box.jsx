'use client';

import { env } from '@/env';
import { useInfiniteMovies } from '@/hooks/useInfiniteMovies';
import { formatDate } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';
import { useDebounce } from 'use-debounce';
import * as z from 'zod';

const schema = z.object({
  searchQuery: z.string().min(2, 'Search query must be at least 2 characters'),
});

export default function SearchBox() {
  const [showModal, setShowModal] = useState(false);
  const searchRef = useRef(null);
  const { ref: inViewRef, inView } = useInView();

  const {
    register,
    watch,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const searchQuery = watch('searchQuery');
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);

  const {
    data: searchResults,
    isLoading,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useInfiniteMovies({
    isSearching: true,
    searchQuery: debouncedSearchQuery,
    enabled: isValid,
  });

  useEffect(() => {
    if (isValid && debouncedSearchQuery && debouncedSearchQuery.length >= 2) {
      refetch();
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [debouncedSearchQuery, refetch, isValid]);

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

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  const handleFocus = () => {
    if (isValid && searchQuery && searchQuery.length >= 2) {
      setShowModal(true);
    }
  };

  return (
    <div className="relative mx-6 max-w-xl flex-1" ref={searchRef}>
      <input
        type="search"
        placeholder="Search Movies..."
        {...register('searchQuery')}
        onFocus={handleFocus}
        className="w-full rounded-full bg-gray-100 px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200 dark:focus:ring-blue-400"
      />

      {searchQuery && errors.searchQuery && (
        <p className="mt-1 text-center text-sm text-red-500">
          {errors.searchQuery.message}
        </p>
      )}

      {showModal && (
        <div className="absolute left-0 right-0 z-10 mt-2 rounded-md bg-popover shadow-lg dark:bg-gray-900">
          {isLoading ? (
            <div className="p-4 text-center text-muted-foreground">
              Loading...
            </div>
          ) : (
            searchResults &&
            searchResults.pages.length > 0 && (
              <ul className="max-h-96 overflow-y-auto py-2">
                {searchResults.pages.map((page) => {
                  return page.results.length > 0 ? (
                    page.results.map((movie) => (
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
                          <div className="flex flex-col gap-1">
                            <p className="text-md font-semibold text-foreground">
                              {movie.title}
                            </p>
                            <p className="text-sm text-foreground">
                              {formatDate(movie.release_date)}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))
                  ) : (
                    <div className="p-4 text-center text-muted-foreground">
                      No results found
                    </div>
                  );
                })}
                <li ref={inViewRef} className="h-1" />
              </ul>
            )
          )}
        </div>
      )}
    </div>
  );
}
