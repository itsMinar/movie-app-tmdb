import MovieDetails from '@/components/movie-details';
import MovieList from '@/components/movie-list';
import { allMovies, movieDetails } from '../../../../emni';

export default async function MovieDetailsPage({ params: { id } }) {
  console.log('🚀 ~ MovieDetailsPage ~ id:', id);

  return (
    <div className="container mx-auto px-4 py-8">
      <MovieDetails movie={movieDetails} />

      <div className="pt-6">
        <h2 className="mb-4 text-2xl font-semibold">Recommended Movies:</h2>
        <MovieList movies={allMovies} />
      </div>
    </div>
  );
}
