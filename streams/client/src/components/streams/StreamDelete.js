import React, { useEffect } from 'react'
import Modal from '../Modal'
import history from '../../history'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions/index';

const StreamDelete = (props) => {
  const { fetchStream, match, stream } = props

  const renderActions = () => {
    return (
      <>
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
      </>
    )
  }
  
  const renderContent = () => {
    if (!stream) {
      return `Are you sure you want to delete this stream?`
    }

    return `Are you sure you want to delete the stream with title: "${stream.title}"?`
  }

  useEffect(() => {
    fetchStream(match.params.id)
  }, [])

  return (
    <Modal
      actions={renderActions()}
      content={renderContent()}
      onDismiss={() => history.push('/')}
      title={`Delete Stream`}
    />
  )
}

const mapStateToProps = (state, ownProps) => {
  const { streams } = state
  const { match } = ownProps

  return {
    stream: streams[match.params.id]
  }
}
export default connect(mapStateToProps, { fetchStream })(StreamDelete)
