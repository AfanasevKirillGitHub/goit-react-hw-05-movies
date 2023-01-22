import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/movieAPI';
import NoPoster from '../../images/NoPoster.png';
import {
  MovieImage,
  MovieItem,
  MovieLink,
  MovieList,
  Title,
} from './Movies.styled';

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
      <MovieList>
        {searchResults.map(({ id, poster_path, title }) => {
          return (
            <MovieItem key={id}>
              <MovieLink to={`${id}`} state={{ from: location }}>
                <MovieImage
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w342${poster_path}`
                      : NoPoster
                  }
                  alt={title}
                />
                <Title>{title}</Title>
              </MovieLink>
            </MovieItem>
          );
        })}
      </MovieList>
    </div>
  );
};

export default Movies;
