import React, { useState } from "react";
import "./SearchBar.css";
const SearchBar = (props) => {
  const [songSearch, setSongSearch] = useState("");

  function searchResults(event) {
    event.preventDefault();
    let response = props.songs.filter((song) => {
      if (song.album.toLowerCase().includes(songSearch.toLowerCase())) {
        return true;
      } else if (song.artist.toLowerCase().includes(songSearch.toLowerCase())) {
        return true;
      } else if (song.title.toLowerCase().includes(songSearch.toLowerCase())) {
        return true;
      } else if (song.genre.toLowerCase().includes(songSearch.toLowerCase())) {
        return true;
      } else if (song.release_date.includes(songSearch)) {
        return true;
      }
    });
    props.setSongs(response);
    setSongSearch("");
    if (songSearch === "") {
      props.getAllSongs();
    }
  }

  return (
    <div className="nav-bar">
        <a href="#add-song">
          <button className="add">
          <img src="https://img.icons8.com/ios-filled/50/000000/plus-2-math.png"/>
          </button>
        </a>
      <h1 className="heading">Music Library</h1>
      <form onSubmit={searchResults}>
        <div>
          <input
            className="user-input"
            type="text"
            value={songSearch}
            onChange={(e) => setSongSearch(e.target.value)}
            placeholder="Search here..."
          />{" "}
          <button className="search" type="submit">
            <img src="https://img.icons8.com/ios-filled/30/000000/search--v1.png" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
