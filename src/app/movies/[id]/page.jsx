import MovieDetails from '@/components/movie-details';
import MovieList from '@/components/movie-list';
import {
  fetchMovieCredits,
  fetchMovieDetails,
  fetchMovieRecommendations,
} from '@/lib/api';

export const revalidate = 60;

// TODO: implement later
// export async function generateStaticParams() {
//   const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
//   const BASE_URL = 'https://api.themoviedb.org/3';
//   const response = await fetch(
//     `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
//   );
//   const data = await response.json();

//   return data.results.slice(0, 20).map((movie) => ({
//     id: movie.id.toString(),
//   }));
// }

export async function generateMetadata({ params: { id } }) {
  const movieDetails = await fetchMovieDetails(id);

  return {
    title: movieDetails.title,
  };
}

export default async function MovieDetailsPage({ params: { id } }) {
  const [movieDetails, credits, recommendations] = await Promise.all([
    fetchMovieDetails(id),
    fetchMovieCredits(id),
    fetchMovieRecommendations(id),
  ]);

  return (
    <>
      <MovieDetails movie={movieDetails} allCast={credits?.cast} />

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
    </>
  );
}
