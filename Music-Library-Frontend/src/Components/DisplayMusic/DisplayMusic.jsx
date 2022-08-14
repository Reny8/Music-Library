import "./DisplayMusic.css";
import Buttons from "./Buttons.jsx";
import axios from "axios";

const DisplayMusic = (props) => {
  async function updateLikes(songPk) {
    let response = await axios.patch(`http://127.0.0.1:8000/music/${songPk}/`);
    if (response.status === 202) await props.getAllSongs();
  }
  async function updateSong(songPk, songObject) {
    let response = await axios.put(
      `http://127.0.0.1:8000/music/${songPk}/`,
      songObject
    );
    props.getAllSongs();
  }

  async function deleteSong(songPk) {
    let response = await axios.delete(`http://127.0.0.1:8000/music/${songPk}/`);
    if (response.status === 200) await props.getAllSongs();
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
                    style={{ width: 70, height: "auto" }}
                    src={song.album_image}
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
