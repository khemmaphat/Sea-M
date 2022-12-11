import React from 'react'

import Close from 'img/Logout-button.png'

const Modal = ({ isVisible, onClose, children }) => {
    if ( !isVisible ) return null;

    const handleClose = () => {
        if( e.target.id === 'wrapper') onClose();
    }
    
    return (
        <div id="wrapper" onClick={handleClose}>
            <div className="grid grid-cols-3 gap-4">
                <div className="absolute z-40 flex place-self-center m-16"> 
                    <div className="absolute z-40 flex justify-items-center flex-col bg-amber-100 w-96 shadow-2xl rounded-lg border-4 border-none border-solid">
                        <button tabIndex="-1" onClick={() => onClose()} aria-label="Close"><img className="z-40 justify-items-center hover:scale-110 w-4 h-4 ml-auto mr-2 mt-2" src={Close} id="close-modal"/></button>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal