import React from "react";
const netflixIcon = require("./Images/netflix.png");
const funiIcon = require("./Images/funi.jpg");
const crunchIcon = require("./Images/crunchyroll.png")
const primeIcon = require("./Images/prime_video.png")
const huluIcon = require("./Images/hulu.png")

const StreamingIcon = ({ url }) => {
  const extractDomainName = url => {
    const firstPeriod = url.indexOf(".");
    const secondPeriod = url.indexOf(".", firstPeriod + 1);
    return url.substring(firstPeriod + 1, secondPeriod);
  };

  const mapUrlToImage = url => {
    const domainName = extractDomainName(url);
    switch (domainName) {
      case "netflix":
        return netflixIcon;
      case "funimation":
        return funiIcon;
      case "crunchyroll":
        return crunchIcon;
      case "amazon":
        return primeIcon;
      case "hulu":
        return huluIcon;
      default:
        return "#";
    }
  };

  return (
    <div className="streamingIconContainer">
        <a href={url}>
          <img className="streamingIconImage" src={mapUrlToImage(url)} alt="netflix icon" />
        </a>
    </div>
  );
};

export default StreamingIcon;
