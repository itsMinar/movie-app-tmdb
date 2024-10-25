import { getWatchList, logout } from '@/actions';
import MovieList from '@/components/movie-list';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Watch List - Movie App',
};

export default async function WatchListPage() {
  const watchList = await getWatchList();

  return (
    <div>
      <div className="flex justify-center gap-10">
        <h1 className="mb-8 text-center text-2xl font-bold">WatchList</h1>
        <form action={logout}>
          <Button type="submit" variant="destructive">
            Logout
          </Button>
        </form>
      </div>

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
