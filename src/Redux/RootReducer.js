import { act } from "react-dom/test-utils";

const reducer = (state = { token: null, shows: [] }, action) => {
  switch (action.type) {
    case "ADD_SHOW":
      action.showData.episodesWatched = 0;
      var tempState = { ...state };
      tempState.shows = [...tempState.shows, { showData: action.showData }];
      console.log(tempState);
      return tempState;
    case "MODIFY_EPISODES_WATCHED":
      var tempState = { ...state };
      tempState.shows[action.showIndex].episodesWatched = action.newAmount;
      return tempState;
    case "DELETE_SHOW":
      var tempState = { ...state };
      tempState.shows.splice(action.index, 1);
      return tempState;
    case "LOAD_SHOWS":
      var tempState = { ...state };
      if (action.showData.length > 0) {
        tempState.shows = JSON.parse(action.showData[0].data);
      }
      return tempState;
    case "ADD_TOKEN":
      var tempState = { ...state };
      tempState.token = action.token;
      return tempState;
    case "CLEAR_STORE":
      localStorage.clear();
      return {token: null, shows: []}
    default:
      return state;
  }
};

export default reducer;
