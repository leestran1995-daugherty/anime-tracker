export const addShow = (showData) => ({
  type: 'ADD_SHOW',
  showData: showData
})

export const modifyEpisodesWatched = (newNum, index) => ({
  type: 'MODIFY_EPISODES_WATCHED',
  newAmount: newNum,
  showIndex: index
})

export const initStorage = (shows) => ({
  type: 'INIT_STORAGE',
  shows: shows
})