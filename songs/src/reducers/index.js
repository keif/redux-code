import { combineReducers } from 'redux'

const songsReducer = () => {
  return [
    { title: 'Smells Like Teen Spirit', duration: '4:05' },
    { title: 'Everlong', duration: '3:20' },
    { title: 'Nothing Else Matters', duration: '2:20' },
    { title: 'Coffee Mug', duration: '1:20' }
  ]
}

const selectedSongReducer = (selectedSong = null, { type, payload }) => {
  if (type === 'SONG_SELECTED') {
    return payload
  }

  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
