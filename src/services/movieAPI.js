import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c8f6fe1d28bbf3bb36eaa9cda22eaa79';

export async function getTrending() {
  const params = 'trending/movie/week';
  const options = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });
  return axios.get(`${API_URL}${params}?${options}`);
}

export async function getSearchMovie(query) {
  const params = 'search/movie';
  const options = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    query: query,
  });
  return axios.get(`${API_URL}${params}?${options}`);
}
