import { Title } from 'pages/HomePage/HomePage.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieByReviews } from 'services/movieAPI';
import { Author, Content, ReviewsItem, ReviewsList } from './Reviews.styled';

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
      ({reviewsDetails.length === 0 && <Title>No reviews found</Title>})
      <ReviewsList>
        {reviewsDetails.map(({ id, author, content }) => (
          <ReviewsItem key={id}>
            <Author>{author}</Author>
            <Content>{content}</Content>
          </ReviewsItem>
        ))}
      </ReviewsList>
    </div>
  );
};
export default Reviews;
