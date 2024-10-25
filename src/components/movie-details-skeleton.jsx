import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function MovieDetailsSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div className="md:col-span-1">
        <Card className="bg-white dark:bg-gray-800">
          <CardContent className="p-0">
            <Skeleton className="h-[750px] w-full rounded-t-lg bg-gray-200 dark:bg-gray-700" />
          </CardContent>
        </Card>
      </div>
      <div className="md:col-span-2">
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <Skeleton className="h-9 w-3/4 bg-gray-200 dark:bg-gray-700" />
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex flex-wrap gap-2">
              {[1, 2, 3].map((i) => (
                <Skeleton
                  key={i}
                  className="h-6 w-20 bg-gray-200 dark:bg-gray-700"
                />
              ))}
            </div>

            <Skeleton className="mb-2 h-7 w-32 bg-gray-200 dark:bg-gray-700" />
            <Skeleton className="mb-4 h-24 w-full bg-gray-200 dark:bg-gray-700" />

            <div className="mb-4 flex items-center">
              <Skeleton className="mr-2 h-4 w-4 bg-gray-200 dark:bg-gray-700" />
              <Skeleton className="h-4 w-40 bg-gray-200 dark:bg-gray-700" />
            </div>

            <Skeleton className="mb-2 h-7 w-16 bg-gray-200 dark:bg-gray-700" />
            <div className="mb-4 flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton
                  key={i}
                  className="h-6 w-24 bg-gray-200 dark:bg-gray-700"
                />
              ))}
            </div>

            <Skeleton className="h-10 w-40 bg-gray-200 dark:bg-gray-700" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
