import React, { useEffect } from 'react'
import Modal from '../Modal'
import history from '../../history'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions/index';

const StreamDelete = (props) => {
  const { fetchStream, match } = props

  const renderActions = () => {
    return (
      <>
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
      </>
    )
  }
  
  useEffect(() => {
    fetchStream(match.params.id)
  }, [])

  return (
    <>
      StreamDelete
      <Modal
        actions={renderActions()}
        content={'Are you sure you want to delete this stream?'}
        onDismiss={() => history.push('/')}
        title={'Delete Stream'}
      />
    </>
  )
}

export default connect(null, { fetchStream })(StreamDelete)
