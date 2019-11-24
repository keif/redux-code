import React from 'react'
import Modal from '../Modal'
import history from '../../history'

const StreamDelete = (props) => {
  const actions = (
    <>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </>
  )

  return (
    <>
      StreamDelete
      <Modal
        actions={actions}
        content={'Are you sure you want to delete this stream?'}
        onDismiss={() => history.push('/')}
        title={'Delete Stream'}
      />
    </>
  )
}

export default StreamDelete
