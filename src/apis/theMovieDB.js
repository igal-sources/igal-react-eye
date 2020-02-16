import axios from "axios";
import { API_URL, API_KEY } from "../config";

//Resources:

export const getMovies = (query, page, callback) => {
  const endpoint = buildUrl(query.resource, page);
  fetchData(endpoint, response => callback(response));
};

export const loadMoreMovies = (searchTerm, currentPage, callback) => {
  let endpoint;

  if (!searchTerm) {
    endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage + 1}`;
  } else {
    endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${currentPage +
      1}`;
  }

  fetchData(endpoint, response => callback(response));
};

export const getMovieByID = (movieId, callback) => {
  const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  fetchData(endpoint, response => callback(response));
};

export const getList = (listId, callback) => {
  const endpoint = buildUrl(`list/${listId}`);
  fetchData(endpoint, response => callback(response));
};

const buildUrl = (query, page) =>
  `${API_URL}${query}?api_key=${API_KEY}&language=en-US${page && `&page=${page}`}`;

const fetchData = async (url, callback) => {
  try {
    const response = await axios(`${url}`, {
      params: {}
    });

    if (!response) {
      throw new Error("Something went wrong");
    }

    const json = await response.data;
    callback(json);
  } catch (error) {
    console.log("error: ", error);
  }
};
