// Configuration for TMDB
// To se the latest configuration fetch it from https://api.themoviedb.org/3/configuration?api_key=67a6282843d3951c480df57aad82eaef

export const ApiConfig = {
  API_KEY: "67a6282843d3951c480df57aad82eaef",
  BASE_URL: "https://api.themoviedb.org/3",
  IMAGE_BASE_URL: "http://image.tmdb.org/t/p/",
  BACKDROP_SIZE: "w1280",
  POSTER_SIZE: "w500"
};

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "67a6282843d3951c480df57aad82eaef";

// Images
// An image URL looks like this example:
// http://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";

//Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = "w1280";

// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = "w500";

export { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE };
