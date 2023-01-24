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
  MoviesWrapper,
  MovieTitle,
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
          const { data } = await getSearchMovie(searchMovie);
          setSearchResults(data.results);

          // console.log(data.results);
          // if (data.results.length === 0) {
          //   toast.warn('Error');
          // }
        } catch (error) {
          console.log(error);
        }
      };
      fetchData(searchMovie);
    }
  }, [searchMovie]);

  return (
    <MoviesWrapper>
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
                <MovieTitle>{title}</MovieTitle>
              </MovieLink>
            </MovieItem>
          );
        })}
      </MovieList>
    </MoviesWrapper>
  );
};

export default Movies;
