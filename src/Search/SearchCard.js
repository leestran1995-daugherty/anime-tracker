import React from "react";
import { useDispatch } from "react-redux";
import { addShow } from "../Redux/Actions";

const SearchCard = props => {
  const dispatch = useDispatch();

  const saveShow = () => {
    let data = props.data;
    fetch(
      props.data.relationships.streamingLinks.links.related
    )
      .then(response => response.json())
      .then(r => {
        data.streamingInfo = r;
        dispatch(addShow(data));
      });
  };

  return (
    <div className="box">
      <article className="media searchCardContainer">
        <figure className="media-left">
          <p className="image is-128x128">
            <img
              src={props.data.attributes.posterImage.tiny}
              alt={"Poster image for: " + props.data.attributes.titles.en}
            />
          </p>
        </figure>
        <div className="media-content">
          <strong>
            {props.data.attributes.titles.en
              ? props.data.attributes.titles.en
              : props.data.attributes.titles.en_jp}{" "}
          </strong>
          <small>
            (
            {props.data.attributes.startDate &&
              props.data.attributes.startDate.substring(0, 4)}
            )
          </small>
          <br />
          <p className="showDesc">{props.data.attributes.synopsis}</p>
        </div>
        <button className="button is-primary" onClick={() => saveShow()}>
          +
        </button>
      </article>
    </div>
  );
};

export default SearchCard;
