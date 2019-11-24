import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions/index'
import flv from 'flv.js'

const StreamShow = (props) => {
  const { fetchStream, match, stream } = props
  const videoRef = useRef()

  useEffect(() => {
    fetchStream(match.params.id)
  }, [match])

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
