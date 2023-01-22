import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/movieAPI';
import NoPoster from '../../images/NoPoster.png';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchMovie = searchParams.get('query') ?? '';
  const location = useLocation();

  const handleSubmit = searchMovie => {
    setSearchParams(searchMovie !== '' ? { query: searchMovie } : {});
  };

  useEffect(() => {
    if (searchMovie !== '') {
      const fetchData = async () => {
        try {
          const {
            data: { results },
          } = await getSearchMovie(searchMovie);
          setSearchResults(results);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData(searchMovie);
    }
  }, [searchMovie]);

  return (
    <div>
      <SearchForm onSubmit={handleSubmit}></SearchForm>
      <ul>
        {searchResults.map(({ id, poster_path, title }) => {
          return (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w342${poster_path}`
                      : NoPoster
                  }
                  alt={title}
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

export default Movies;
