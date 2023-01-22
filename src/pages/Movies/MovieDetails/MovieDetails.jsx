import { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieById } from 'services/movieAPI';
import NoPoster from '../../../images/NoPoster.png';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const goBackHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getMovieById(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [movieId]);

  if (!movieDetails) {
    return;
  }
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieDetails;

  return (
    <>
      <Link to={goBackHref.current}>Go back</Link>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w342${poster_path}`
              : NoPoster
          }
          alt={title}
        />
        <div>
          <h2>
            {title} ({release_date ? `${release_date.slice(0, 4)}` : 'no info'})
          </h2>
          <p>User Score {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>
            {genres.length > 0
              ? genres.map(({ name, id }) => <span key={id}> {name} </span>)
              : 'No information about genres'}
          </p>
        </div>
      </div>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
