import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrending } from 'services/movieAPI';

export const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { results },
        } = await getTrending();
        setTrendingMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Trending movies today</h2>
      <ul>
        {trendingMovies.map(({ id, title, poster_path }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                  alt=""
                />
                <p>{title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
