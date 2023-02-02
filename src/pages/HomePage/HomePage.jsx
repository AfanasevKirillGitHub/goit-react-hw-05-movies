import Box from 'components/Box/Box';
import { useEffect, useState } from 'react';
import {
  getMovieByTopRated,
  getPopularForKids,
  getTrending,
} from 'services/movieAPI';


import { Loader } from 'components/Loader/Loader';



import { TrendMovies } from 'components/MovieList/TrendMovies/TrendMovies';
import { KidsPopularMovies } from 'components/MovieList/KidsPopularMovies/KidsPopularMovies';
import { TopRatedMovies } from 'components/MovieList/TopRatedMovies/TopRatedMovies';


export const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularKidsMovies, setPopularKidsMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setStatus('pending');

    const fetchDataTrend = async () => {
      try {
        const {
          data: { results },
        } = await getTrending();

        setStatus('resolved');
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

        setStatus('resolved');
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

        setStatus('resolved');
        setTopRated(results);

      } catch (error) {
        console.log(error);
      }
    };
    fetchDataPopular();

  }, []);

  return (
    <Box>

      {status === "pending" && <Loader />}
      {status === "resolved" && <TrendMovies movieData={trendingMovies} />}
      {status === "resolved" && <KidsPopularMovies movieData={popularKidsMovies} />}
      {status === "resolved" && <TopRatedMovies movieData={topRated} />}

    </Box>
  );
};
