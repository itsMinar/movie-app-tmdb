'use client';

import { toggleWatchList } from '@/actions';
import { useOptimistic } from 'react';
import { Button } from './ui/button';

export default function WatchlistToggleButton({
  movie,
  isInitiallyInWatchList,
}) {
  const [isInWatchList, setIsInWatchList] = useOptimistic(
    isInitiallyInWatchList
  );

  const handleToggle = async () => {
    setIsInWatchList(!isInWatchList);
    await toggleWatchList(movie);
  };

  return (
    <Button
      onClick={handleToggle}
      variant={isInWatchList ? 'destructive' : 'default'}
    >
      {isInWatchList ? 'Remove from Watchlist' : 'Add to Watchlist'}
    </Button>
  );
}
