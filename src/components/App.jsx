import { HomePage } from 'pages/HomePage/HomePage';
import { MovieDetails } from 'pages/Movies/MovieDetails/MovieDetails';
import { Movies } from 'pages/Movies/Movies';
import { Route, Routes } from 'react-router-dom';
// import { getTrending } from '../services/movieAPI';
import { Layout } from './Layout/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      <ToastContainer />
    </Layout>
  );
};
