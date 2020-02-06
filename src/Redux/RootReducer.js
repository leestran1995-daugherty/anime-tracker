const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_SHOW":
      action.showData.episodesWatched = 0;
      return [
        ...state,
        {
          showData: action.showData
        }
      ];
    case "MODIFY_EPISODES_WATCHED":
      var tempState = [...state];
      tempState[action.showIndex].episodesWatched = action.newAmount;
      return tempState;
    case "DELETE_SHOW":
      var tempState = [...state];
      tempState.splice(action.index, 1);
      return tempState;
    case "LOAD_SHOWS":
      return JSON.parse(action.showData[0].data);
    default:
      return state;
  }
};

export default reducer;
