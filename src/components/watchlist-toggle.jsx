import { isAddedToWatchList, toggleWatchList } from '@/actions';
import { Button } from './ui/button';

export default async function WatchListToggle({ movie }) {
  const isInWatchList = await isAddedToWatchList(movie.id);

  return (
    <form action={toggleWatchList.bind(null, movie)}>
      <Button type="submit" variant={isInWatchList ? 'destructive' : 'default'}>
        {isInWatchList ? 'Remove from Watchlist' : 'Add to Watchlist'}
      </Button>
    </form>
  );
}
