import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'

const StreamEdit = (props) => {
  const { fetchStream, match, stream } = props

  useEffect(() => {
    fetchStream(match.params.id)
  }, [])

  console.log(props)

  if (!stream) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div>{stream.title}</div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { streams } = state
  const { match } = ownProps
  return {
    stream: streams[match.params.id]
  }
}

export default connect(mapStateToProps, { fetchStream })(StreamEdit)
