import React from 'react'
import { connect } from 'react-redux'

const StreamEdit = (props) => {
  return (
    <div>StreamEdit</div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { streams } = state
  const { match } = ownProps
  return {
    stream: streams[match.params.id]
  }
}

export default connect(mapStateToProps)(StreamEdit)
