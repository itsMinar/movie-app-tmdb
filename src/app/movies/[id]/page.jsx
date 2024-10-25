import MovieDetails from '@/components/movie-details';
import MovieDetailsSkeleton from '@/components/movie-details-skeleton';
import MovieListSkeleton from '@/components/movie-list-skeleton';
import RecommendedMovies from '@/components/recommended-movies';
import { fetchMovieDetails } from '@/lib/api';
import { Suspense } from 'react';

export const revalidate = 60;

export async function generateMetadata({ params: { id } }) {
  const movieDetails = await fetchMovieDetails(id);

  return {
    title: movieDetails.title,
  };
}

export async function generateStaticParams() {
  const { fetchPopularMovies } = await import('@/lib/api');
  const data = await fetchPopularMovies();

  const movies = data.results;

  return movies.map((movie) => ({
    id: movie.id.toString(),
  }));
}

export default function MovieDetailsPage({ params: { id } }) {
  return (
    <>
      <Suspense fallback={<MovieDetailsSkeleton />}>
        <MovieDetails movieId={id} />
      </Suspense>

      <Suspense
        fallback={
          <div className="mt-4">
            <MovieListSkeleton />
          </div>
        }
      >
        <RecommendedMovies movieId={id} />
      </Suspense>
    </>
  );
}
