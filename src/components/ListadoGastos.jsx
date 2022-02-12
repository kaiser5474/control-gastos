import React from 'react'
import Gasto from './Gasto'

const Gastos = ({
    gastos, 
    setGastoEditar, 
    setModal,  
    transiccion, 
    setTransiccion, 
    modal, 
    setGastoEliminar}) => {  
  return (
    <div className='listado-gastos contenedor'>
        <h2>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>
            {
                gastos.map((gasto) => {
                    return <Gasto 
                        key = {gasto.id}
                        gasto = {gasto}
                        setGastoEditar = {setGastoEditar}
                        setModal = {setModal}
                        transiccion = {transiccion}
                        setTransiccion = {setTransiccion}
                        modal = {modal}
                        setGastoEliminar = {setGastoEliminar}
                    />
                })
            }
    </div>
  )
}

export default Gastos