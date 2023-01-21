import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/movieAPI';

export const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  // const [searchMovie, setSearchMovie] = useSearchParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const searchMovie = searchParams.get('query') ?? '';

  // const [seachParams, setSearchParams] = useSearchParams();
  // const parametr = seachParams.get('query') ?? '';

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

  // console.log(searchResults);
  return (
    <div>
      <SearchForm onSubmit={handleSubmit}></SearchForm>
      <ul>
        {searchResults.map(({ id, poster_path, title }) => {
          return (
            <li key={id}>
              <Link to={`${id}`}>
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
