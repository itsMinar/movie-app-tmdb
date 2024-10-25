import { env } from '@/env';

async function fetchFromAPI(endpoint) {
  const response = await fetch(
    `${env.NEXT_PUBLIC_TMDB_API_BASE_URL}${endpoint}?api_key=${env.NEXT_PUBLIC_TMDB_API_KEY}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}

export async function fetchMovieDetails(id) {
  return fetchFromAPI(`/movie/${id}`);
}

export async function fetchMovieCredits(id) {
  return fetchFromAPI(`/movie/${id}/credits`);
}

export async function fetchMovieRecommendations(id) {
  return fetchFromAPI(`/movie/${id}/recommendations`);
}

export async function fetchPopularMovies() {
  return fetchFromAPI(`/movie/popular`);
}
