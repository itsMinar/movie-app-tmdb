import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { env } from '@/env';
import { formatDate } from '@/lib/utils';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import WatchListToggle from './watchlist-toggle';

export default function MovieDetails({ movie, allCast = [] }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div className="md:col-span-1">
        <Card>
          <CardContent className="p-0">
            <Image
              src={`${env.NEXT_PUBLIC_TMDB_IMAGE_URL}/w500/${movie.poster_path}`}
              alt={movie.title}
              width={500}
              height={750}
              className="h-auto w-full rounded-t-lg"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
            />
          </CardContent>
        </Card>
      </div>
      <div className="md:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">{movie.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <Badge key={genre.id} variant="secondary">
                  {genre.name}
                </Badge>
              ))}
            </div>

            <h2 className="mb-2 text-xl font-semibold">Description</h2>
            <p className="mb-4 text-muted-foreground">{movie.overview}</p>
            <div className="mb-4 flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>Release Date: {formatDate(movie.release_date)}</span>
            </div>

            <h2 className="mb-2 text-xl font-semibold">Cast</h2>
            <div className="mb-4 flex flex-wrap gap-2">
              {allCast.map((cast) => (
                <Badge className="text-sm" key={cast.id} variant="secondary">
                  {cast.name}
                </Badge>
              ))}
            </div>

            <WatchListToggle movie={movie} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
