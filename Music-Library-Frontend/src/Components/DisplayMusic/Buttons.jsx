import React, { useState } from "react";
import "./DisplayMusic.css";
const Buttons = (props) => {
  const [object, setObject] = useState({
    title: props.songs.title,
    artist: props.songs.artist,
    album: props.songs.album,
    release_date: props.songs.release_date,
    genre: props.songs.genre,
    likes: props.songs.likes,
    album_image: props.songs.album_image,
  });

  function handleLikes(id) {
    props.updateLikes(id);
  }
  function handleUpdate(id) {
    let category = prompt(
      `You have selected the song: ${props.songs.title}\nWhat would you like to change:\n Enter album, artist, title, genre,release date or image`
    ).toLowerCase();
    let value = prompt(`Enter your new ${category}`);
    if (category == "album") {
      setObject({ ...object, album: value });
      props.updateSong(id, object);
    } else if (category == "artist") {
      setObject({ ...object, artist: value });
      props.updateSong(id, object);
    } else if (category == "title") {
      setObject({ ...object, title: value });
      props.updateSong(id, object);
    } else if (category == "genre") {
      setObject({ ...object, genre: value });
      props.updateSong(id, object);
    } else if (category == "release date") {
      setObject({ ...object, release_date: value });
      props.updateSong(id, object);
    } else if (category == "image") {
      setObject({ ...object, album_image: value });
      props.updateSong(id, object);
    }
  }

  function handleDelete(id) {
    props.deleteSong(id);
  }

  return (
    <td>
      <div className="button">
        <div className="each-1">
          <button onClick={() => handleLikes(props.songs.id)}>
            <img src="https://img.icons8.com/material-rounded/30/000000/facebook-like--v1.png" />{" "}
            {props.songs.likes}
          </button>
        </div>
        <div className="each-2">
          <button onClick={() => handleUpdate(props.songs.id, object)}>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png" />
          </button>
        </div>
        <div className="each-3">
          {" "}
          <button onClick={() => handleDelete(props.songs.id)}>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png" />
          </button>{" "}
        </div>
      </div>
    </td>
  );
};

export default Buttons;
