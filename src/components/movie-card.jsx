'use client';

import { toggleWatchList } from '@/actions';
import { env } from '@/env';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function MovieCard({ movie, hasRemoveBtn }) {
  const [hoveredMovie, setHoveredMovie] = useState(null);

  const handleRemoveFromWatchList = async () => {
    await toggleWatchList(movie);
  };

  return (
    <div className="relative">
      <Link href={`/movies/${movie.id}`}>
        <div
          className="transform overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
          onMouseEnter={() => setHoveredMovie(movie.id)}
          onMouseLeave={() => setHoveredMovie(null)}
        >
          <div className="relative aspect-[2/3]">
            <Image
              src={`${env.NEXT_PUBLIC_TMDB_IMAGE_URL}/w500${movie.poster_path}`}
              alt={movie.title}
              fill
              className="object-cover"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
            />
            {hoveredMovie === movie.id && (
              <div className="absolute inset-0 overflow-y-auto bg-black bg-opacity-75 p-4 text-white">
                <h3 className="mb-2 text-lg font-semibold">{movie.title}</h3>
                <p className="mb-2 text-sm">{movie.overview}</p>
              </div>
            )}
          </div>
          <div className="p-4">
            <h2 className="mb-2 truncate text-lg font-semibold dark:text-gray-900">
              {movie.title}
            </h2>
            <p className="mb-2 text-sm text-gray-600">
              Release: {formatDate(movie.release_date)}
            </p>
          </div>
        </div>
      </Link>

      {hasRemoveBtn && (
        <button
          onClick={handleRemoveFromWatchList}
          className="absolute bottom-4 right-4 rounded bg-red-500 px-2 py-1 text-sm text-white hover:bg-red-600"
        >
          Remove
        </button>
      )}
    </div>
  );
}
