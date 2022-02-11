import React from 'react'
import cerrar from './../img/cerrar.svg'

const Modal = ({setModal}) => {
    const cerrarModal = () => {
        setModal(false)
    }
  return (
    <div className='modal'>
        <p>Desde modal</p>
        <img 
            className='cerrar-modal'
            src={cerrar}
            onClick={cerrarModal}
        />
        <form action="" className='formulario label'>
            <input 
                className='label'
                type='text'
                placeholder='Añade tu presupesto'
            />
            <input
                type='submit'
                value='Enviar'
            />
        </form>
    </div>
  )
}

export default Modal