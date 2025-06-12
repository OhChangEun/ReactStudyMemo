import { useState, useEffect } from "react";
import Movie from "./Movie";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const getMovies = async () => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const json = await response.json();
      setMovies(json.data.movies);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <div>
      {movies.map((movie) => (
        <Movie
          key={movie.id} // key prop 추가
          coverImg={movie.medium_cover_image}
          title={movie.title}
          summary={movie.summary}
          genres={movie.genres}
        />
      ))}
    </div>
  );
}

export default App;
