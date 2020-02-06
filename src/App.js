import React, { useState, useEffect } from "react";
import "./App.css";
import bulma from "bulma";
import SearchModal from "./Search/SearchModal";
import { useSelector } from "react-redux";
import ShowCard from "./ShowCard";
import { useDispatch } from "react-redux";
import { loadShows } from "./Redux/Actions";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const shows = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const serializedState = JSON.stringify(shows);
    localStorage.setItem("shows", serializedState);

    return () => {
      const serializedState = JSON.stringify(shows);
      localStorage.setItem("shows", serializedState);
    };
  }, [shows]);

  const handleSave = () => {
    const data = { username: username, data: JSON.stringify(shows) };
    fetch("http://localhost:3003/api/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const handleLoad = () => {
    fetch("http://localhost:3003/api/getByUsername/" + username)
      .then(res => res.json())
      .then(data => dispatch(loadShows(data)));
  };

  return (
    <div className="App container">
      <button
        className="button is-link is-rounded searchButton"
        onClick={() => setShowModal(true)}
      >
        Search
      </button>
      <input
        className="input"
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <button className="button" onClick={() => handleSave()}>
        Save
      </button>
      <button className="button" onClick={() => handleLoad()}>
        Load data
      </button>
      {shows &&
        shows.map((show, index) => (
          <ShowCard
            key={show.showData}
            showData={show.showData}
            index={index}
          />
        ))}
      {/* Modal */}
      {showModal && <SearchModal setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
