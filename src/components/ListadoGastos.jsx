import React from 'react'
import Gasto from './Gasto'

const Gastos = ({gastos, modal}) => {  
  return (
    <div className={`listado-gastos contenedor`}>
        <h2>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>
            {
                gastos.map((gasto) => {
                    <Gasto 
                        key = {gasto.id}
                        gasto = {gasto}
                    />
                })
            }
        {/* <div>
            <p>Grafica aqui</p>
        </div>
        <div className=''>
            <p>
                <span>Presupuesto: {''}</span>{gastos.nombre}
            </p>
            <p>
                <span>Disponible: {''}</span>{gastos.cantidad}
            </p>
            <p>
                <span>Gastado: {''}</span>{gastos.categoria}
            </p>
        </div> */}
    </div>
  )
}

export default Gastos