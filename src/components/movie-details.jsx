import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDate } from '@/lib/utils';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import { allCast } from '../../emni';
import { Button } from './ui/button';

export default function MovieDetails({ movie }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div className="md:col-span-1">
        <Card>
          <CardContent className="p-0">
            <Image
              src="https://image.tmdb.org/t/p/w500/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg"
              alt="The Wild Robot movie poster"
              width={500}
              height={750}
              className="h-auto w-full rounded-t-lg"
            />
          </CardContent>
        </Card>
      </div>
      <div className="md:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">
              {movie.original_title}
            </CardTitle>
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
            <p className="text-muted-foreground mb-4">{movie.overview}</p>
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

            <div>
              <Button>Add to Watchlist</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
