import { MovieItems } from "../MovieItems/MovieItems";
import { MovieList, Title, TrendWrapper } from "./TrendMovies.styled";


export const TrendMovies = ({ movieData }) => {
    return (
        <TrendWrapper>
            <Title>Trending now</Title>
            <MovieList>
                <MovieItems movieData={movieData} />
            </MovieList>
        </TrendWrapper >
    )
}