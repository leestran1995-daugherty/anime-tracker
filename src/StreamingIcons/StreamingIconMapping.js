const netflixIcon = require("../Images/netflix.png");
const funiIcon = require("../Images/funi.jpg");
const crunchIcon = require("../Images/crunchyroll.png");
const primeIcon = require("../Images/prime_video.png");
const huluIcon = require("../Images/hulu.png");
const tubiIcon = require("../Images/tubi.png");

export const urlToIconMappings = [
  {
    exp: /.+netflix.+/,
    icon: netflixIcon,
    alt: "Netflix Icon"
  },
  {
    exp: /.+funimation.+/,
    icon: funiIcon,
    alt: "Funimation Icon"
  },
  {
    exp: /.+crunchyroll.+/,
    icon: crunchIcon,
    alt: "Crunchyroll Icon"
  },
  {
    exp: /.+amazon.+/,
    icon: primeIcon,
    alt: "Amazon Prime Icon"
  },
  {
    exp: /.+hulu.+/,
    icon: huluIcon,
    alt: "Hulu Icon"
  },
  {
    exp: /.+tubitv.+/,
    icon: tubiIcon,
    alt: "tubitv Icon"
  }
];
