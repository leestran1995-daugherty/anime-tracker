export const addShow = (showData) => ({
  type: 'ADD_SHOW',
  showData: showData
})

export const modifyEpisodesWatched = (newNum, index) => ({
  type: 'MODIFY_EPISODES_WATCHED',
  newAmount: newNum,
  showIndex: index
})

export const deleteShow = (index) => ({
  type: 'DELETE_SHOW',
  index: index
})