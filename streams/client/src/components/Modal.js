import React from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import history from '../history'

const Modal = (props) => {
  const handleModalDimmerClick = () => history.push('/')
  const handleModalClick = (event) => event.stopPropagation()

  return createPortal(
    <div className="ui dimmer modals visible active" onClick={handleModalDimmerClick}>
      <div className="ui standard modal visible active" onClick={handleModalClick}>
        <div className="header">
          Delete Stream
        </div>
        <div className="content">
          Are you sure you want to delete this stream?
        </div>
        <div className="actions">
          <button className="ui primary button" type="button">Delete</button>
          <button className="ui button" type="button">Cancel</button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  )
}

export default Modal
