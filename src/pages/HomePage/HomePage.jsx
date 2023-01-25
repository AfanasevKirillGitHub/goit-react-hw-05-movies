import Box from 'components/Box/Box';
import { useEffect, useState } from 'react';
import {
  getMovieByTopRated,
  getPopularForKids,
  getTrending,
} from 'services/movieAPI';
import {
  KidsWrapper,
  MovieImage,
  MovieItem,
  MovieLink,
  MovieList,
  Title,
  TopRaredWrapper,
  TrendWrapper,
} from './HomePage.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import '../../index.css';

export const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularKidsMovies, setPopularKidsMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const fetchDataTrend = async () => {
      try {
        const {
          data: { results },
        } = await getTrending();
        setTrendingMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataTrend();

    const fetchDataKids = async () => {
      try {
        const {
          data: { results },
        } = await getPopularForKids();
        setPopularKidsMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataKids();

    const fetchDataPopular = async () => {
      try {
        const {
          data: { results },
        } = await getMovieByTopRated();
        setTopRated(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataPopular();
  }, []);

  return (
    <Box>
      <TrendWrapper>
        <Title>Trending now</Title>
        <MovieList>
          <Swiper
            loop={true}
            loopFillGroupWithBlank={true}
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 10,
                slidesPerGroup: 3,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 10,
                slidesPerGroup: 5,
              },
              1280: {
                slidesPerView: 7,
                spaceBetween: 25,
                slidesPerGroup: 7,
              },
            }}
            navigation={true}
            modules={[Navigation]}
          >
            {trendingMovies.map(({ id, title, poster_path }) => {
              return (
                <SwiperSlide key={id}>
                  <MovieItem>
                    <MovieLink to={`movies/${id}`}>
                      <MovieImage
                        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                        alt={title}
                      />
                      {/* <MovieTitle>{title}</MovieTitle> */}
                    </MovieLink>
                  </MovieItem>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </MovieList>
      </TrendWrapper>
      <KidsWrapper>
        <Title>Kids popular movies</Title>
        <MovieList>
          <Swiper
            loop={true}
            loopFillGroupWithBlank={true}
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 10,
                slidesPerGroup: 3,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 10,
                slidesPerGroup: 5,
              },
              1280: {
                slidesPerView: 7,
                spaceBetween: 25,
                slidesPerGroup: 7,
              },
            }}
            navigation={true}
            modules={[Navigation]}
          >
            {popularKidsMovies.map(({ id, title, poster_path }) => {
              return (
                <SwiperSlide key={id}>
                  <MovieItem>
                    <MovieLink to={`movies/${id}`}>
                      <MovieImage
                        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                        alt={title}
                      />
                      {/* <MovieTitle>{title}</MovieTitle> */}
                    </MovieLink>
                  </MovieItem>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </MovieList>
      </KidsWrapper>
      <TopRaredWrapper>
        <Title>Top Rated</Title>
        <MovieList>
          <Swiper
            loop={true}
            loopFillGroupWithBlank={true}
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 10,
                slidesPerGroup: 3,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 10,
                slidesPerGroup: 5,
              },
              1280: {
                slidesPerView: 7,
                spaceBetween: 25,
                slidesPerGroup: 7,
              },
            }}
            navigation={true}
            modules={[Navigation]}
          >
            {topRated.map(({ id, title, poster_path }) => {
              return (
                <SwiperSlide key={id}>
                  <MovieItem>
                    <MovieLink to={`movies/${id}`}>
                      <MovieImage
                        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                        alt={title}
                      />
                      {/* <MovieTitle>{title}</MovieTitle> */}
                    </MovieLink>
                  </MovieItem>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </MovieList>
      </TopRaredWrapper>
    </Box>
  );
};
