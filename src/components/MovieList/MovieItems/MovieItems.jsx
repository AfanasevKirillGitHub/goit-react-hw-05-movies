import { MovieImage, MovieItem, MovieLink } from "./MovieItems.styled";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../index.css';

export const MovieItems = ({ movieData }) => {
    return (
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
            {movieData.map(({ id, title, poster_path }) => {
                return (
                    <SwiperSlide key={id}>
                        <MovieItem>
                            <MovieLink to={`movies/${id}`}>
                                <MovieImage
                                    src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                                    alt={title}
                                />
                            </MovieLink>
                        </MovieItem>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    )
}