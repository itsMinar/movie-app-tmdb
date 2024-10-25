import { fetchMovieRecommendations } from '@/lib/api';
import MovieList from './movie-list';

export const revalidate = 60;

export default async function RecommendedMovies({ movieId }) {
  const recommendations = await fetchMovieRecommendations(movieId);

  return (
    <div className="pt-6">
      <h2 className="mb-4 text-2xl font-semibold">Recommended Movies:</h2>
      {recommendations.results && recommendations.results.length > 0 ? (
        <MovieList movies={recommendations.results} />
      ) : (
        <p className="mt-8 rounded-lg border border-gray-400 bg-gray-50 py-4 text-center text-lg text-gray-600 shadow-md dark:bg-gray-800 dark:text-gray-300">
          No Recommended Movies Available!
        </p>
      )}
    </div>
  );
}
