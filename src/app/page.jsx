import MovieList from '@/components/infinite-scroll-movie-list';

export default function HomePage() {
  return (
    <>
      <h1 className="mb-8 text-center text-2xl font-bold">Popular Movies</h1>
      <MovieList />
    </>
  );
}
