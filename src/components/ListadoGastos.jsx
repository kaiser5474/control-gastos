import React from 'react'
import Gasto from './Gasto'

const Gastos = ({
    gastos, 
    gastoFiltrado,
    setGastoEditar, 
    setModal,  
    transiccion, 
    setTransiccion, 
    modal, 
    setGastoEliminar,
    filtro            
}) => {  
  return (
    <div className='listado-gastos contenedor'>
        {filtro ?
            <h2>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>
            : 
            <h2>{gastoFiltrado.length ? 'Gastos' : 'No hay gastos aún'}</h2>
        }
        {
            !filtro 
            ?
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
                        filtro = {filtro}
                    />
                })
            
            : 
                gastoFiltrado.map((gasto) => {
                    return <Gasto 
                        key = {gasto.id}
                        gasto = {gasto}
                        setGastoEditar = {setGastoEditar}
                        setModal = {setModal}
                        transiccion = {transiccion}
                        setTransiccion = {setTransiccion}
                        modal = {modal}
                        setGastoEliminar = {setGastoEliminar}
                        filtro = {filtro}
                    />
                })
            
            }
    </div>
  )
}

export default Gastos