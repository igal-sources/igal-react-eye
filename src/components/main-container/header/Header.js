import React from "react";
import { Link, Route, useLocation } from "react-router-dom";
import classNames from "classnames";
import { Menu, Icon } from "semantic-ui-react";
import { StoreContext } from "../../../services/store";
import * as types from "shared/types";
import "./header.scss";

const Header = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/").pop();
  const store = React.useContext(StoreContext);
  
  const dashboardClassName = classNames({
    "Header-link": true,
    active: path === ""
  });
  const moviesClassName = classNames({
    "Header-link": true,
    active: path === types.MOVIES
  });
  const tvShowsClassName = classNames({
    "Header-link": true,
    active: path === types.TV_SHOWS
  });
  const peopleClassName = classNames({
    "Header-link": true,
    active: path === types.PEOPLE
  });

  return (
    <>
      <Menu id="Header-mainMenu" className="Header-mainMenu">
        <div className="Header-links">
          <Link to="/" className={dashboardClassName}>
            Dashboard
          </Link>
          <Link to="/movies" className={moviesClassName}>
            Movies
          </Link>
          <Link to="/tvshows" className={tvShowsClassName}>
            TV Shows
          </Link>
          <Link to="/people" className={peopleClassName}>
            People
          </Link>
        </div>
        <Menu.Item
          position="right"
          className="Header-menuItem-settings"
          active={pathname.startsWith("settings", 1)}
          as={Link}
          to={"/settings"}
        >
          <Icon id="Header-settings-tooltip" size="big" name="setting" />
        </Menu.Item>
        <Menu.Item
          className="Header-menuItem-user"
          active={pathname.startsWith("user", 1)}
          as={Link}
          to={"/user"}
        >
          {store.userName}
        </Menu.Item>
        <Route path="/" />
        <Route path="/movies" />
        <Route path="/tvshows" />
        <Route path="/people" />
      </Menu>
    </>
  );
};

export default Header;
