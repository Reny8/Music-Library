import React, { useState } from "react";
import "./AddSong.css";
const AddSong = (props) => {
  const [newSong, setNewSong] = useState({
    title: "",
    artist: "",
    album: "",
    release_date: "",
    genre: "",
    likes: 0,
    album_image: "",
  });

  function Add() {
    props.newSong(newSong);
  }

  return (
    <form className="create" onSubmit={Add}>
      <div className="form-group">
        <h3>Add A Song Here</h3>
        <label>Album Image</label>
        <input
          value={newSong.album_image}
          className="form-control"
          placeholder="Add a url of your image..."
          onChange={(event) =>
            setNewSong({ ...newSong, album_image: event.target.value })
          }
        />
        <label>Album</label>
        <input
          value={newSong.album}
          className="form-control"
          onChange={(event) =>
            setNewSong({ ...newSong, album: event.target.value })
          }
        />
        <label>Artist</label>
        <input
          value={newSong.artist}
          className="form-control"
          onChange={(event) =>
            setNewSong({ ...newSong, artist: event.target.value })
          }
        />
        <label>Title</label>
        <input
          value={newSong.title}
          className="form-control"
          onChange={(event) =>
            setNewSong({ ...newSong, title: event.target.value })
          }
        />
        <label>Genre</label>
        <input
          value={newSong.genre}
          className="form-control"
          onChange={(event) =>
            setNewSong({ ...newSong, genre: event.target.value })
          }
        />
        <label>Release Date</label>
        <input
          value={newSong.release_date}
          className="form-control"
          placeholder="yyyy-mm-dd"
          type="date"
          onChange={(event) =>
            setNewSong({ ...newSong, release_date: event.target.value })
          }
        />
      </div>
      <div className="around-button">
        <button className="add-song" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddSong;
