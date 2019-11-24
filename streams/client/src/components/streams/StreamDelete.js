import React, { useEffect } from 'react'
import Modal from '../Modal'
import history from '../../history'
import { connect } from 'react-redux'
import { deleteStream, fetchStream } from '../../actions/index'
import { Link } from 'react-router-dom'

const StreamDelete = (props) => {
  const { deleteStream, fetchStream, match, stream } = props

  const handleDelete = () => {
    deleteStream(match.params.id)
  }

  const renderActions = () => {
    return (
      <>
        <button className="ui button negative" onClick={handleDelete}>Delete</button>
        <Link className="ui button" to="/">Cancel</Link>
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
export default connect(mapStateToProps, { deleteStream, fetchStream })(StreamDelete)
