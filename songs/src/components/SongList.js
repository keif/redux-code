import React from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions';

const SongList = (props) => {  
  const { selectSong, songs } = props

  const renderList = () => songs.map((song, idx) => (
    <div className="item" key={idx}>
      <div className="right floated content">
        <button
          className="ui button primary"
          onClick={() => selectSong(song)}
          type="button">Select</button>
      </div>
      <div className="content">{song.title}</div>
    </div>
  ))

  return (
    <div className="ui divided list">{songs && renderList()}</div>
  )
}

const mapStateToProps = (state) => {
  const { songs } = state

  return { songs }
}

export default connect(mapStateToProps, { selectSong })(SongList)
