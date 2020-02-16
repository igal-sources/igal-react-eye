import React from "react";
import { getMovieByID, getMovies } from "../../apis/theMovieDB";
import endpoints from "../../apis/endpoints.json";

const Dashboard = () => {
  const { misc } = endpoints.methods;

  getMovieByID(475557, data => {
    console.log("getMovie: ", data);
  });

  getMovies(misc.PopularMovies, 1, data => {
    console.log("PopularMovies: ", data);
  });

  getMovies(misc.NowPlayingMovies, 1, data => {
    console.log("NowPlayingMovies: ", data);
  });
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Dashboard page body content</p>
    </div>
  );
};

export default Dashboard;
