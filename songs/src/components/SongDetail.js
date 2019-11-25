import React from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions/index';

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) {
    return (
      <div>Select a Song</div> 
    )
  }

  const { title, duration } = selectedSong
  return (
    <div>
      <h3>Details for:</h3>
      <p>Title: {title}
      <br/>
      Duration: {duration}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { selectedSong } = state

  return { selectedSong }
}

export default connect(mapStateToProps)(SongDetail)