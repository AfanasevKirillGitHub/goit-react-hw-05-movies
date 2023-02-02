import { MovieItems } from "../MovieItems/MovieItems"
import { KidsWrapper, MovieList, Title } from "./KidsPopularMovies.styled"

export const KidsPopularMovies = ({ movieData }) => {
    return (
        <KidsWrapper>
            <Title>Kids popular movies</Title>
            <MovieList>
                <MovieItems movieData={movieData} />
            </MovieList>
        </KidsWrapper>
    )
}