import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c8f6fe1d28bbf3bb36eaa9cda22eaa79';

// ======================================================= //
//  Trend week movies //
export async function getTrending() {
  const params = 'trending/movie/week';
  const options = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });
  return axios.get(`${API_URL}${params}?${options}`);
}

// ======================================================= //
//  Movies by search request //
export async function getSearchMovie(query) {
  const params = 'search/movie';
  const options = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    query: query,
  });
  return axios.get(`${API_URL}${params}?${options}`);
}

//  Movies by id //
// ======================================================= //
export async function getMovieById(id) {
  const params = `/movie/${id}`;
  const options = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });
  return axios.get(`${API_URL}${params}?${options}`);
}

// ======================================================= //
//  Movie cast//
export async function getMovieByCredits(id) {
  const params = `/movie/${id}/credits`;
  const options = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });
  return axios.get(`${API_URL}${params}?${options}`);
}

//  Movie reviews//
// ======================================================= //
export async function getMovieByReviews(id) {
  const params = `/movie/${id}/reviews`;
  const options = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });
  return axios.get(`${API_URL}${params}?${options}`);
}
// ======================================================= //
