import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { editStream, fetchStream } from '../../actions'
import StreamForm from './StreamForm'

const StreamEdit = (props) => {
  const { editStream, fetchStream, match, stream } = props

  const onSubmit = (formValues) => {
    console.log(formValues)
  }

  useEffect(() => {
    fetchStream(match.params.id)
  }, [])

  if (!stream) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <>
      <h3>Edit a Stream</h3>
      <StreamForm
        initialValues={stream}
        onSubmit={onSubmit}
      />
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

export default connect(mapStateToProps, { editStream, fetchStream })(StreamEdit)
