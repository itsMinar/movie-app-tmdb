# Movie App 🎬

A dynamic and user-friendly movie app built with Next.js, featuring popular
movies, a search functionality with debouncing, and an infinite scrolling
experience. Users can view detailed information for each movie, add movies to
their watchlist with optimistic UI updates, and see personalized
recommendations. The watchlist is protected by authentication, ensuring a
personalized experience for each user.

## Features

- **Home Page**

  - Displays popular movies with infinite scrolling.
  - Includes a search bar with debouncing and infinite scrolling results for
    easy exploration.

- **Movie Details Page**

  - Shows detailed information about each movie.
  - Allows users to add movies to their watchlist with an optimistic UI update.
  - Recommends related movies based on the selected movie.

- **Watchlist Page**

  - Protected by Next.js middleware: redirects to the login page if the user is
    not authenticated.
  - Allows users to manage their watchlist, including the option to remove
    movies.

## Further Work

The following features are planned for future development:

- **Genre-Based Movie List**

  - Add a dynamic route to browse movies by genre (e.g., /genre/[genreId]).

- **Movies by Cast**

  - Add a dynamic route to list movies acted by a specific actor/actress (e.g.,
    /cast/[castId]).

- **Filtering Options on Home Page**

  - Integrate advanced filtering options on the home page to refine movie
    results by genre, rating, and release year.

## Run Locally

1. Clone this repository -
   ```sh
   https://github.com/itsMinar/movie-app-tmdb
   ```
2. Go to the Directory -

   ```sh
   cd movie-app-tmdb
   ```

3. Install dependencies -
   ```sh
   npm install
   ```
4. create **.env** file and copy environment variables from **.env.example** to
   **.env**
   - Open **.env** and replace placeholders with your own **API Keys or
     values**.
5. Run the project:
   ```bash
   npm run dev
   ```
