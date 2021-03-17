import { MovieCard } from './MovieCard';

interface ContentProps {
  movies: {
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }
}

interface GenreProps {
  selectedGenre: {
    title: string;
  }
}

export function Content({movies, selectedGenre}: ContentProps & GenreProps) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}