import { env } from '@/env';
import { useInfiniteQuery } from '@tanstack/react-query';

const fetchMovies = async ({ pageParam = 1, query }) => {
  const url = query
    ? `${env.NEXT_PUBLIC_TMDB_API_BASE_URL}/search/movie?api_key=${env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=${pageParam}&query=${encodeURIComponent(query)}`
    : `${env.NEXT_PUBLIC_TMDB_API_BASE_URL}/movie/popular?api_key=${env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=${pageParam}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export function useInfiniteMovies({
  isSearching = false,
  searchQuery = '',
  enabled = true,
}) {
  const queryKey = isSearching ? ['searchedMovies', searchQuery] : 'movies';

  return useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam }) => fetchMovies({ pageParam, query: searchQuery }),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
    enabled: enabled && (!!searchQuery || !isSearching),
  });
}
