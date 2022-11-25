import React from 'react'

import Close from 'img/Logout-button.png'
import { useMultipleKeyPress } from 'Shortcutkey';


const Modal = ({ isVisible, onClose, children }) => {
    if ( !isVisible ) return null;

    const handleClose = () => {
        if( e.target.id === 'wrapper') onClose();
    }
    return (
        
        <div id="wrapper" onClick={handleClose}>
            <div className="flex justify-center m-16"> 
                <div className="flex flex-col bg-amber-50 w-96">
                    <button onClick={() => onClose()}><img className="hover:scale-110 w-4 h-4 ml-auto mr-2 mt-2" src={Close}/></button>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal