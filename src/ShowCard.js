import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {modifyEpisodesWatched} from "./Redux/Actions";

const ShowCard = ({ showData, index }) => {
  const dispatch = useDispatch();

  const episodesWatched = useSelector(state => state[index].episodesWatched) || 0;

  const changeEpisodesWatched = (newNum, index) => {
    dispatch(modifyEpisodesWatched(newNum, index));
  };

  return (
    <div className="box">
      <article className="media showCardContainer">
        <figure className="media-left">
          <p className="image is-128x128">
            <img
              src={showData.attributes.posterImage.tiny}
              alt={"Poster image for: " + showData.attributes.titles.en}
            />
          </p>
        </figure>
        <div className="media-content">
          <strong>{showData.attributes.titles.en} </strong>
          <small>
            (
            {showData.attributes.startDate &&
              showData.attributes.startDate.substring(0, 4)}
            )
          </small>
          <br />
          <p className="showDesc">{showData.attributes.synopsis}</p>
          <span>{episodesWatched}/</span>
          <span>{showData.attributes.episodeCount} </span>
          <button className="button is-info is-small" onClick={() => changeEpisodesWatched(episodesWatched + 1, index)}>+</button>
          <button className="button has-text-info is-small" onClick={() => changeEpisodesWatched(episodesWatched -1, index)}>-</button>
        </div>
      </article>
    </div>
  );
};

export default ShowCard;
