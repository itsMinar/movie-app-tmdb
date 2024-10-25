import { env } from '@/env';
import { useInfiniteQuery } from '@tanstack/react-query';

const fetchMovies = async ({ pageParam = 1 }) => {
  const response = await fetch(
    `${env.NEXT_PUBLIC_TMDB_API_BASE_URL}/movie/popular?api_key=${env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=${pageParam}`
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export function useInfiniteMovies() {
  return useInfiniteQuery({
    queryKey: ['movies'],
    queryFn: fetchMovies,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });
}
