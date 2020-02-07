import React from "react";
import { mapUrlToIcon } from "./StreamingIconMappingFunctions";

const StreamingIcon = ({ url }) => {
  return (
    <div className="streamingIconContainer">
      <a href={url}>
        <img
          className="streamingIconImage"
          src={mapUrlToIcon(url).icon}
          alt={mapUrlToIcon(url).alt}
        />
      </a>
    </div>
  );
};

export default StreamingIcon;
