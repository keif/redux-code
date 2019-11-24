import React from 'react';
import { createPortal } from 'react-dom';

const Modal = (props) => {
  const { actions, content, onDismiss, title } = props
  const handleModalClick = (event) => event.stopPropagation()

  return createPortal(
    <div className="ui dimmer modals visible active" onClick={onDismiss}>
      <div className="ui standard modal visible active" onClick={handleModalClick}>
        <div className="header">
          {title}
        </div>
        <div className="content">
          {content}
        </div>
        <div className="actions">
          {actions}
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  )
}

export default Modal
