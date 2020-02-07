import React, { useState, useEffect } from "react";
import "./App.css";
import bulma from "bulma";
import SearchModal from "./Search/SearchModal";
import { useSelector } from "react-redux";
import ShowCard from "./ShowCard";
import { useDispatch } from "react-redux";
import { loadShows, addToken, clearStore } from "./Redux/Actions";

const apiRoot = "http://localhost:3003/api";
const queryString = require("query-string");

const App = () => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const shows = useSelector(state => state.shows);
  const state = useSelector(state => state);

  useEffect(() => {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("shows", serializedState);

    return () => {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("shows", serializedState);
    };
  }, [state]);

  const handleSave = () => {
    const data = { username: username, data: JSON.stringify(shows) };
    // TODO: Declare backend url in a config file
    fetch(
      `${apiRoot}/update?token=` + state.token.access_token,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }
    )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const handleLoad = () => {
    // TODO: Declare backend url in a config file
    fetch(`${apiRoot}/getForToken/${state.token.access_token}`)
      .then(res => res.json())
      .then(data => dispatch(loadShows(data)))
      .catch(err => console.log(err));
  };

  const params = queryString.parse(window.location.search);
  if (params.code && !state.token) {
    fetch(`${apiRoot}/getToken?code=${params.code}`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(token => dispatch(addToken(token)))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    if(state.token) {
      handleLoad();
    }
  }, [state.token])

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
      <a
        className="button"
        href="https://discordapp.com/api/oauth2/authorize?client_id=675021562692239380&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=code&scope=identify"
      >
        Login
      </a>
      <button className="button" onClick={() => dispatch(clearStore())}>Logout</button>
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
};

export default App;
