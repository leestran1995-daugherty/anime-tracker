import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifyEpisodesWatched, deleteShow } from "./Redux/Actions";
import StreamingIcon from "./StreamingIcons/StreamingIcon";

const ShowCard = ({ showData, index }) => {
  const dispatch = useDispatch();

  const episodesWatched =
    useSelector(state => state.shows[index] && state.shows[index].episodesWatched) || 0;

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
          <strong>
            {showData.attributes.titles.en
              ? showData.attributes.titles.en
              : showData.attributes.titles.en_jp}{" "}
          </strong>
          <small>
            (
            {showData.attributes.startDate &&
              showData.attributes.startDate.substring(0, 4)}
            )
          </small>
          <br />
          <p className="showDesc">{showData.attributes.synopsis}</p>
          <div className="episodesWatchedContainer">
            <span className="watchedText">{episodesWatched}/</span>
            <span className="watchedText">
              {showData.attributes.episodeCount}
            </span>
          </div>
          <button
            className="button is-info is-small watchedButtons"
            onClick={() => {
              if (episodesWatched < (showData.attributes.episodeCount || 99999))
                changeEpisodesWatched(episodesWatched + 1, index);
            }}
          >
            +
          </button>
          <button
            className="button has-text-info is-small watchedButtons"
            onClick={() => {
              if (episodesWatched > 0)
                changeEpisodesWatched(episodesWatched - 1, index);
            }}
          >
            -
          </button>
          <div className="streamingIconsContainer">
            {showData.streamingInfo.data.map(site => (
              <StreamingIcon
                key={site.attributes.url}
                url={site.attributes.url}
              />
            ))}
          </div>
          <button
            className="button is-danger is-small is-pulled-right"
            onClick={() => dispatch(deleteShow(index))}
          >
            x
          </button>
        </div>
      </article>
    </div>
  );
};

export default ShowCard;
