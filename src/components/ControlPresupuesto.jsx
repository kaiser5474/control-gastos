import React from 'react'
import { formatearNumero } from '../helpers'

const ControlPresupuesto = ({presupuesto, gastos}) => {
    
    //funciones
    const totalGastos = () => {
        let total = 0;
        gastos.map(gasto => total = total + gasto.cantidad)
        return total
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
                <span>Disponible: {''}</span>{formatearNumero(presupuesto - totalGastos())}
            </p>
            <p>
                <span>Gastado: {''}</span>{formatearNumero(totalGastos())}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto