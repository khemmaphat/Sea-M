import React from 'react'

const Modal = ({ isVisible, onClose, children }) => {
    if ( !isVisible ) return null;

    const handleClose = () => {
        if( e.target.id === 'wrapper') onClose();
    }

    return (
        <div id="wrapper" onClick={handleClose}>
            <div> 
                <button onClick={() => onClose()}>X</button>
                <div>{children}</div>
            </div>
        </div>
    )
}

export default Modal