import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions/index';

const StreamShow = (props) => {
  const { fetchStream, match, stream } = props

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
