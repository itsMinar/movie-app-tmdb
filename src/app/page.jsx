'use client';

import MovieList from '@/components/movie-list';
import { allMovies } from '../../emni';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-2xl font-bold">Popular Movies</h1>
      <MovieList movies={allMovies} />
    </div>
  );
}
