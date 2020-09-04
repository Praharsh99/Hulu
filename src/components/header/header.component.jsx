import React, { useState } from "react";

import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

import "./header.style.css";

function Header({ handleSubmit }) {
  const [hidden, setHidden] = useState(true);
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="header">
      <div className="header__icons">
        <div className="header__icon header__icon--active">
          <HomeIcon />
          <p>Home</p>
        </div>
        <div className="header__icon">
          <FlashOnIcon />
          <p>Trending</p>
        </div>
        <div className="header__icon">
          <LiveTvIcon />
          <p>Verified</p>
        </div>
        <div className="header__icon">
          <VideoLibraryIcon />
          <p>Collections</p>
        </div>

        <div className="header__icon">
          <PersonOutlineIcon />
          <p>Account</p>
        </div>

        <div className="header__icon-search">
          <div className="header__icon" onClick={() => setHidden(!hidden)}>
            <SearchIcon />
            <p>Search</p>
          </div>

          <form
            onSubmit={(e) => handleSubmit(e, query)}
            className={`header__searchForm ${hidden && "header__formHide"}`}
          >
            <input
              type="text"
              value={query}
              onChange={handleChange}
              maxLength="32"
              placeholder="Search for movies..."
            />
          </form>
        </div>
      </div>

      <img
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        alt="Hulu"
      />
    </div>
  );
}

export default Header;
