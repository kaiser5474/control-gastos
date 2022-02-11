import React, { useState, useEffect } from 'react'

const ControlPresupuesto = ({presupuesto}) => {

    const formatearNumero = (cantidad) => {
        return cantidad.toLocaleString('es-US', {style : 'currency', currency: 'USD'})
    } 
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>Grafica aqui</p>
        </div>
        <div className='contenido-presupuesto'>
            <p>
                <span>Presupuesto: {''}</span>{formatearNumero(presupuesto)}
            </p>
            <p>
                <span>Disponible: {''}</span>{formatearNumero(0)}
            </p>
            <p>
                <span>Gastado: {''}</span>{formatearNumero(0)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto