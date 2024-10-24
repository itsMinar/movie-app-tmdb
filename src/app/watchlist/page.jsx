import { getWatchList } from '@/actions';
import MovieList from '@/components/movie-list';

export default async function WatchListPage() {
  const watchList = await getWatchList();

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">WatchList:</h2>
      {watchList.length > 0 ? (
        <MovieList movies={watchList} />
      ) : (
        <p>No Movies in WatchList!</p>
      )}
    </div>
  );
}
