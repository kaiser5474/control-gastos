import React, { useState, useEffect } from 'react'
import { formatearNumero } from '../helpers'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({presupuesto, gastos}) => {
    //funciones
    const totalGastos = () => {
        let total = 0;
        gastos.map(gasto => total = total + gasto.cantidad)
        return total
    }

    const [porcentage, setPorcentage] = useState(0)
    useEffect(() => {
        const porciento = 100 - (((presupuesto - totalGastos())/presupuesto) * 100)
        setPorcentage(porciento.toFixed(2))
    }, [gastos])
    
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar 
                styles={buildStyles({
                    pathColor: '#3b82f6',
                    backgroundColor: '#7aa4e9'
                })}
                 value={porcentage} 
                 text={`${porcentage}%`} 
            />
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