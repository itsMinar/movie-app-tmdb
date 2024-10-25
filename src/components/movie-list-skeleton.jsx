import { Card } from '@/components/ui/card';

function SkeletonCard() {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[2/3] animate-pulse bg-gray-200"></div>
      <div className="space-y-2 p-4">
        <div className="h-4 animate-pulse rounded bg-gray-200" />
        <div className="h-3 w-3/4 animate-pulse rounded bg-gray-200" />
      </div>
    </Card>
  );
}

export default function MovieListSkeleton({ count = 4 }) {
  return (
    <div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      aria-busy="true"
      aria-label="Loading movies"
    >
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}
