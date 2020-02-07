import {urlToIconMappings} from "./StreamingIconMapping"

export const mapUrlToIcon = url => {
  const icons = urlToIconMappings
    .filter(mapping => mapping.exp.test(url));

    if(icons.length === 0 || icons.length > 1) {
      return null;
    } else {
      return icons[0]
    }
};