import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from '../dashboard/Dashboard';
import Movies from "../movies/Movies";
import People from "../people/People";
import TVShows from "../tv-shows/TVShows";
import Settings from "../main-container/Settings";
import NotFoundPage from "./not-found-page/NotFoundPage";

export default () => (
  <Switch>
    <Route path={"/settings"} component={Settings} />
    <Route exact path="/" component={Dashboard} />
    <Route path="/movies" component={Movies} />
    <Route path="/tvshows" component={TVShows} />
    <Route path="/people" component={People} />
    <Route component={NotFoundPage} />
  </Switch>
);
