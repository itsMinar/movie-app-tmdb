'use client';

import { useInfiniteMovies } from '@/hooks/useInfiniteMovies';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import MovieCard from './movie-card';
import MovieListSkeleton from './movie-list-skeleton';

export default function MovieList() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteMovies({});

  const { ref, inView } = useInView();

  const [showNoMoreMovies, setShowNoMoreMovies] = useState(false);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    } else if (inView && !hasNextPage && !showNoMoreMovies) {
      setShowNoMoreMovies(true);
    }
  }, [inView, fetchNextPage, hasNextPage, showNoMoreMovies]);

  if (status === 'pending') return <MovieListSkeleton />;
  if (status === 'error') return <div>Error fetching movies</div>;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data?.pages.map((page) =>
        page.results.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      )}

      <div ref={ref} className="col-span-full flex justify-center p-4">
        {isFetchingNextPage ? (
          <div>Loading more...</div>
        ) : hasNextPage ? (
          <div hidden>Load more</div>
        ) : showNoMoreMovies ? (
          <div>No more movies</div>
        ) : null}
      </div>
    </div>
  );
}
