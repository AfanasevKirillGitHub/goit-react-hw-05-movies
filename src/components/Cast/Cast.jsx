import { Title } from 'pages/HomePage/HomePage.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieByCredits } from 'services/movieAPI';
import NoPhoto from '../../images/NoPhoto.jpg';
import {
  CastItem,
  CastList,
  CastWrapper,
  Character,
  Name,
  Photo,
} from './Cast.styled';

const Cast = () => {
  const [castDetails, setCastDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getMovieByCredits(movieId);
        setCastDetails(data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [movieId]);

  if (!castDetails) {
    return;
  }

  return (
    <CastWrapper>
      {castDetails.length === 0 && <Title>No cast found</Title>}
      <CastList>
        {castDetails.map(({ id, profile_path, name, character }) => {
          return (
            <CastItem key={id}>
              <Photo
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w342${profile_path}`
                    : NoPhoto
                }
                alt={name}
              />
              <Name>{name}</Name>
              <Character>{character}</Character>
            </CastItem>
          );
        })}
      </CastList>
    </CastWrapper>
  );
};
export default Cast;
