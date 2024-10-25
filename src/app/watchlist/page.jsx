import { getWatchList } from '@/actions';
import MovieList from '@/components/movie-list';

export const metadata = {
  title: 'Watch List - Movie App',
};

export default async function WatchListPage() {
  const watchList = await getWatchList();

  return (
    <div>
      <h1 className="mb-8 text-center text-2xl font-bold">WatchList</h1>
      {watchList.length > 0 ? (
        <MovieList movies={watchList} hasRemoveBtn={true} />
      ) : (
        <h1 className="text-center text-xl dark:text-gray-300">
          No Movies in Your Watchlist Yet!
        </h1>
      )}
    </div>
  );
}
