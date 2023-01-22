import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieByCredits } from 'services/movieAPI';
import NoPhoto from '../../images/NoPhoto.jpg';

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
    <div>
      {castDetails.map(({ id, profile_path, name, character }) => {
        return (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w342${profile_path}`
                  : NoPhoto
              }
              alt={name}
            />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        );
      })}
    </div>
  );
};
export default Cast;
