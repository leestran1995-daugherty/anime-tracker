import React, { useState } from "react";
import SearchResults from "./SearchResults";

const SearchModal = ({ setShowModal }) => {
  const apiRoot = "https://kitsu.io/api/edge";
  const [results, setResults] = useState([]);
  const [titleQuery, setTitleQuery] = useState("");

  const searchText = () => {
    const queryUrl = apiRoot + "/anime?filter[text]=" + titleQuery;
    fetch(queryUrl)
      .then(response => response.json())
      .then(j => setResults(j));
  };

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={() => setShowModal(false)} />
      <div className="modal-content">
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="text"
              placeolder="Title"
              value={titleQuery}
              onChange={e => setTitleQuery(e.target.value)}
            />
          </div>
          <div className="control">
            <button
              className="button is-info"
              href="#"
              alt="search button"
              onClick={() => searchText()}
            >
              Search
            </button>
          </div>
        </div>
        {results && (
          <div className="box">
            <SearchResults results={results} />
          </div>
        )}
      </div>
      <button
        className="modal-close is-large"
        aria-label="Close"
        onClick={() => setShowModal(false)}
      />
    </div>
  );
};

export default SearchModal;
