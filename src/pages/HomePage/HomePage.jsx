import { useEffect, useState } from 'react';
import { getTrending } from 'services/movieAPI';
import {
  HomePageWrapper,
  MovieImage,
  MovieItem,
  MovieLink,
  MovieList,
  MovieTitle,
  Title,
} from './HomePage.styled';

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
    <HomePageWrapper maxWidth={1400} mx="auto">
      <Title>Trending movies today</Title>
      <MovieList>
        {trendingMovies.map(({ id, title, poster_path }) => {
          return (
            <MovieItem key={id}>
              <MovieLink to={`movies/${id}`}>
                <MovieImage
                  src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                  alt=""
                />
                <MovieTitle>{title}</MovieTitle>
              </MovieLink>
            </MovieItem>
          );
        })}
      </MovieList>
    </HomePageWrapper>
  );
};
