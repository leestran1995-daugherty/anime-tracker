const reducer = (state = { token: null, shows: [] }, action) => {
  var tempState = {...state};
  switch (action.type) {
    case "ADD_SHOW":
      action.showData.episodesWatched = 0;
      tempState.shows = [...tempState.shows, { showData: action.showData }];
      return tempState;
    case "MODIFY_EPISODES_WATCHED":
      tempState.shows[action.showIndex].episodesWatched = action.newAmount;
      return tempState;
    case "DELETE_SHOW":
      tempState.shows.splice(action.index, 1);
      return tempState;
    case "LOAD_SHOWS":
      if (action.showData.length > 0) {
        tempState.shows = JSON.parse(action.showData[0].data);
      }
      return tempState;
    case "ADD_TOKEN":
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
