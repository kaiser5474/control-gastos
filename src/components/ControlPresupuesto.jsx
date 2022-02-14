import React, { useState, useEffect } from 'react'
import { formatearNumero } from '../helpers'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({presupuesto, gastos}) => {

    //hooks
    const [porcentage, setPorcentage] = useState(0)    

    //funciones
    const totalGastos = () => {
        let total = 0;
        gastos.map(gasto => total = total + gasto.cantidad)
        return total
    }    

    //constantes
    const disponible = presupuesto - totalGastos()

    const handleResetApp = () => {
        if(confirm("Deseas reiniciar el presupuesto y los gastos")){
            localStorage.removeItem('presupuesto');
            localStorage.removeItem('gastos');
            window.location.reload();
        }
    }
    
    //UseEffect para cada vez que se editen los gastos se modifique el porcient, este va a cambiar la grafica circular
    useEffect(() => {
        const porciento = 100 - (((presupuesto - totalGastos())/presupuesto) * 100)
        setPorcentage(porciento.toFixed(2))
    }, [gastos])
    
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar 
                styles={buildStyles({
                    pathColor: disponible < 0 ? '#DC2626' : '#3b82f6',
                    trailColor: '#f5f5f5',
                    textColor: '#3b82f6'
                })}
                 value={porcentage} 
                 text={`${porcentage}% gastado  `} 
            />
        </div>
        <div className='contenido-presupuesto'>
            <button 
                className='reset-app'
                type='button'
                onClick={handleResetApp}
            >
                Resetear App
            </button>
            <p>
                <span>Presupuesto: {''}</span>{formatearNumero(presupuesto)}
            </p>
            <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                <span>Disponible: {''}</span>{formatearNumero(disponible)}
            </p>
            <p>
                <span>Gastado: {''}</span>{formatearNumero(totalGastos())}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto