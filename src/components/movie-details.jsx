import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDate } from '@/lib/utils';
import { Calendar, Clock, DollarSign, Star } from 'lucide-react';
import Image from 'next/image';
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
            <p className="text-muted-foreground mb-6">{movie.overview}</p>

            <div className="mb-6 grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>Release Date: {formatDate(movie.release_date)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                <span>Runtime: {movie.runtime} minutes</span>
              </div>
              <div className="flex items-center">
                <Star className="mr-2 h-4 w-4" />
                <span>
                  Rating: {movie.vote_average}/10 ({movie.vote_count} votes)
                </span>
              </div>
              <div className="flex items-center">
                <DollarSign className="mr-2 h-4 w-4" />
                <span>Budget: ${movie.budget}</span>
              </div>
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
