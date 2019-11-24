import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions/index'
import flv from 'flv.js'

const StreamShow = (props) => {
  const { fetchStream, match, stream } = props
  const videoRef = useRef()
  let player = null

  const buildPlayer = () => {
    const { id } = match.params

    if (player || !stream) {
      return
    }

    if (stream && flv.isSupported()) {
      player = flv.createPlayer({
          type: 'flv',
          url: `http://localhost:8000/live/${id}.flv`
      })
      player.attachMediaElement(videoRef.current)
      player.load()
    }
  }

  useEffect(() => {
    const { id } = match.params
    fetchStream(id)
    buildPlayer()
  }, [match])

  useEffect(() => {
    buildPlayer()
  }, [match, stream])

  if (!stream) {
    return (
      <>
        Loading...
      </>
    )
  }

  return (
    <>
      <video ref={videoRef} style={{ width: `100%` }} controls={true} />
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { streams } = state
  const { match } = ownProps

  return {
    stream: streams[match.params.id]
  }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow)
