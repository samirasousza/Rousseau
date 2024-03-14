import React from 'react'
import './Modal.css'

export default function Modal({isOpen, setModalOpen, children}) {
  
  if (isOpen) {
    return (
    <div className='background'>
        <div className='modal'>
            <div>
            {children}
            </div>

            <button onClick={setModalOpen}>Fcehar</button>
        </div>
    </div>
    )
  }
  return null
}