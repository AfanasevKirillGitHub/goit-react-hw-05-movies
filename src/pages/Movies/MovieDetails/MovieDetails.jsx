import Box from 'components/Box/Box';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/movieAPI';
import NoPoster from '../../../images/NoPoster.png';
import {
  GoBackLink,
  InfoLink,
  InfoList,
  InfoWrapper,
  MovieDetailsImage,
  MovieDetailsWrapper,
  SubTitle,
  Text,
  TitleInfo,
} from './MovieDetails.styled';

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
    <Box maxWidth={1400} py={100} mx="auto">
      <GoBackLink to={goBackHref.current}>Go back</GoBackLink>
      <MovieDetailsWrapper>
        <MovieDetailsImage
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w342${poster_path}`
              : NoPoster
          }
          alt={title}
        />
        <InfoWrapper>
          <TitleInfo>
            {title} ({release_date ? `${release_date.slice(0, 4)}` : 'no info'})
          </TitleInfo>
          <Text>User Score {Math.round(vote_average * 10)}%</Text>
          <SubTitle>Overview</SubTitle>
          <Text>{overview}</Text>
          <SubTitle>Genres</SubTitle>
          <Text>
            {genres.length > 0
              ? genres.map(({ name, id }) => <span key={id}> {name} </span>)
              : 'No information about genres'}
          </Text>
        </InfoWrapper>
      </MovieDetailsWrapper>
      <div>
        <TitleInfo>Additional information</TitleInfo>
        <InfoList>
          <li>
            <InfoLink to="cast">Cast</InfoLink>
          </li>
          <li>
            <InfoLink to="reviews">Reviews</InfoLink>
          </li>
        </InfoList>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default MovieDetails;
