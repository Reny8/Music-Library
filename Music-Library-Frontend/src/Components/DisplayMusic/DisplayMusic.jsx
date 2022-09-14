import "./DisplayMusic.css";
import Buttons from "./Buttons.jsx";
import axios from "axios";

const DisplayMusic = (props) => {
  async function updateLikes(songPk) {
    try {
      await axios.patch(`http://127.0.0.1:8000/music/${songPk}/`);
      props.getAllSongs();
    } catch (error) {
      alert(error.message);
    }
  }
  async function updateSong(songPk, songObject) {
    try {
      await axios.put(`http://127.0.0.1:8000/music/${songPk}/`, songObject);
      props.getAllSongs();
    } catch (error) {}
  }

  async function deleteSong(songPk) {
    try {
      await axios.delete(`http://127.0.0.1:8000/music/${songPk}/`);
      props.getAllSongs();
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th scope="col">ALBUM</th>
            <th scope="col">ARTIST</th>
            <th scope="col">TITLE</th>
            <th scope="col">GENRE</th>
            <th scope="col">RELEASED</th>
          </tr>
        </thead>
        <tbody>
          {props.songs.map((song) => {
            return (
              <tr key={song.id} scope="row">
                <td>
                  <img
                    className="album-image"
                    src={song.album_image}
                    alt="album"
                  />
                </td>
                <td>{song.album}</td>
                <td>{song.artist}</td>
                <td>{song.title}</td>
                <td>{song.genre}</td>
                <td style={{ width: "7rem" }}>{song.release_date}</td>{" "}
                <Buttons
                  songs={song}
                  updateLikes={updateLikes}
                  updateSong={updateSong}
                  deleteSong={deleteSong}
                />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayMusic;
