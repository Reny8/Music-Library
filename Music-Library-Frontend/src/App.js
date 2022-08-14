import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic";
import SearchBar from "./Components/SearchBar/SearchBar";
import AddSong from "./Components/AddSong/AddSong";

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    let response = await axios.get("http://127.0.0.1:8000/music/");
    setSongs(response.data);
  }
  async function newSong(newSong) {
    try {
        let response = await axios.post("http://127.0.0.1:8000/music/", newSong);
    getAllSongs();
    } catch (error) {
      alert('Error Occured When Adding the Song')
    }
  }
  

  return (
    <div className='page'>
      <div>
        <SearchBar
          songs={songs}
          setSongs={setSongs}
          getAllSongs={getAllSongs}
        />
      </div>
      
      <div className='color-type'>
        <DisplayMusic songs={songs} getAllSongs={getAllSongs} />
        <div id="add-song">
          <AddSong songs={songs} newSong={newSong} />
        </div>
      </div>
    </div>
  );
}

export default App;
