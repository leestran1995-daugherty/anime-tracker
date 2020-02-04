import React, { useState, useEffect } from "react";
import "./App.css";
import bulma from "bulma";
import SearchModal from "./Search/SearchModal";
import { useSelector } from "react-redux";
import ShowCard from "./ShowCard";

function App() {
  const [showModal, setShowModal] = useState(false);
  const shows = useSelector(state => state);
  console.log(shows);

  useEffect(() => {
    return () => {
      if (shows.length === 0) {
        console.log("clearing local storage")
        localStorage.clear();
      } else {
        const serializedState = JSON.stringify(shows);
        localStorage.setItem("shows", serializedState);
      }
    };
  });

  return (
    <div className="App container">
      <button
        className="button is-link is-rounded searchButton"
        onClick={() => setShowModal(true)}
      >
        Search
      </button>
      {shows &&
        shows.map((show, index) => (
          <ShowCard showData={show.showData} index={index} />
        ))}
      {/* Modal */}
      {showModal && <SearchModal setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
