import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieByReviews } from 'services/movieAPI';

const Reviews = () => {
  const [reviewsDetails, setReviewsDetails] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getMovieByReviews(movieId);
        setReviewsDetails(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [movieId]);

  if (!reviewsDetails) {
    return;
  }

  return (
    <div>
      {reviewsDetails.map(({ id, author, content }) => (
        <li key={id}>
          <b>{author}</b>
          <p>{content}</p>
        </li>
      ))}
      {reviewsDetails.length === 0 && <p>No reviews found</p>}
    </div>
  );
};
export default Reviews;
