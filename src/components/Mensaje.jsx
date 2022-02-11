import React from 'react'

const Mensaje = ({mensaje}) => {
  return (
    <div className={`alerta ${mensaje.tipo}`}>{mensaje.msg}</div>
  )
}

export default Mensaje