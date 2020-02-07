import React, { useState, useEffect } from "react";
import "./App.css";
import bulma from "bulma";
import SearchModal from "./Search/SearchModal";
import { useSelector } from "react-redux";
import ShowCard from "./ShowCard";
import { useDispatch } from "react-redux";
import { loadShows, addToken, clearStore } from "./Redux/Actions";
import Login from "./Login";
import {API_ROOT} from "./Constants"
import ApiButtons from "./ApiButtons"

const queryString = require("query-string");

const App = () => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
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

  const handleLoad = () => {
    fetch(`${API_ROOT}/getForToken/${state.token.access_token}`)
      .then(res => res.json())
      .then(data => dispatch(loadShows(data)))
      .catch(err => console.log(err));
  };

  const params = queryString.parse(window.location.search);
  if (params.code && !state.token) {
    console.log("Getting a token");
    fetch(`${API_ROOT}/getToken?code=${params.code}`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(token => dispatch(addToken(token)))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    if (state.token) {
      handleLoad();
    }
  }, [state.token]);

  if (!state.token) {
    return <Login />;
  }

  return (
    <div className="App container">
      <button
        className="button is-link is-rounded searchButton"
        onClick={() => setShowModal(true)}
      >
        Search
      </button>
      <br/>
      <ApiButtons handleLoad={handleLoad} />
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
