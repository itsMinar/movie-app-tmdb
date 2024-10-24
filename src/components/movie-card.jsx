'use client';

import { formatDate } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function MovieCard({ movie }) {
  const [hoveredMovie, setHoveredMovie] = useState(null);

  return (
    <Link href={`/movies/${movie.id}`}>
      <div
        className="transform overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
        onMouseEnter={() => setHoveredMovie(movie.id)}
        onMouseLeave={() => setHoveredMovie(null)}
      >
        <div className="relative aspect-[2/3]">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            layout="fill"
            objectFit="cover"
          />
          {hoveredMovie === movie.id && (
            <div className="absolute inset-0 overflow-y-auto bg-black bg-opacity-75 p-4 text-white">
              <h3 className="mb-2 text-lg font-semibold">{movie.title}</h3>
              <p className="mb-2 text-sm">{movie.overview}</p>
            </div>
          )}
        </div>
        <div className="p-4">
          <h2 className="mb-2 truncate text-lg font-semibold">{movie.title}</h2>
          <p className="mb-2 text-sm text-gray-600">
            Release: {formatDate(movie.release_date)}
          </p>
        </div>
      </div>
    </Link>
  );
}
