import { isAddedToWatchList } from '@/actions';
import WatchlistToggleButton from './watchlist-toggle-button';

export default async function WatchListToggle({ movie }) {
  const isInWatchList = await isAddedToWatchList(movie.id);

  return (
    <WatchlistToggleButton
      movie={movie}
      isInitiallyInWatchList={isInWatchList}
    />
  );
}
