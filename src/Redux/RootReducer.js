  const reducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_SHOW':
        action.showData.episodesWatched = 0;
        console.log(action);
        return [
          ...state,
          {
            showData: action.showData
          }
        ]
      case 'MODIFY_EPISODES_WATCHED':
        var tempState = [...state];
        tempState[action.showIndex].episodesWatched = action.newAmount;
        return tempState;
      case 'DELETE_SHOW':
        var tempState = [...state]
        tempState.splice(action.index, 1);
        return tempState;
      default:
        return state;
    }
  }

  export default reducer;