import { MovieItems } from "../MovieItems/MovieItems"
import { MovieList, Title, TopRaredWrapper } from "./TopRatedMovies.styled"


export const TopRatedMovies = ({ movieData }) => {
    return (
        <TopRaredWrapper>
            <Title>Top Rated</Title>
            <MovieList>
                <MovieItems movieData={movieData} />
            </MovieList>
        </TopRaredWrapper>

    )
}