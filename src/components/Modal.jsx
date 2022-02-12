import React, { useState } from 'react'
import cerrar from './../img/cerrar.svg'
import Mensaje from './Mensaje'

const Modal = ({
    setModal, 
    transiccion, 
    setTransiccion, 
    guardarGasto, 
    gastos
}) => {
    //hooks 
    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [categoria, setCategoria] = useState("")
    const [mensaje, setMensaje] = useState({})

    const cerrarModal = () => {
        setTransiccion(false)
        setNombre("")
        setCantidad("")
        setCategoria("")
        setTimeout(() => {
            setModal(false)
          }, 500);
    }

    //funciones
    const handleSubmit = (e) => {
        e.preventDefault();
        const mensajeObj = {
            msg: '',
            tipo: ''
        }
        const gastoObj = {
            nombre, 
            cantidad, 
            categoria,
            id: gastos.id
        }
        if([nombre, cantidad, categoria].includes('')){
            mensajeObj.msg = "Todos los campos son obligatorios"
            mensajeObj.tipo = "error"
            setMensaje(mensajeObj)
        }else{    
            setMensaje({})
            guardarGasto(gastoObj)
            cerrarModal();
        }        
        //
    }
  return (
    <div className='modal'>        
        <img 
            className='cerrar-modal'
            src={cerrar}
            onClick={cerrarModal}
        />
        <form 
            onSubmit={(e)=> handleSubmit(e)} 
            className={`formulario ${transiccion ? 'animar' : 'cerrar'}`}
        >
            <legend>Nuevo Gasto</legend>
            { mensaje && <Mensaje mensaje = {mensaje}/>  }
            <div className='campo'>
                <label htmlFor='nombre'>Nombre Gasto</label>
                <input 
                    className='label'
                    type='text'
                    placeholder='Añade el nombre del gasto'
                    id='nombre'
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div className='campo'>
                <label htmlFor='cantidad'>Cantidad</label>
                <input 
                    className='label'
                    type='number'
                    placeholder='Agrega la cantidad del presupuesto ej.300'
                    id='cantidad'
                    value={cantidad}
                    onChange={(e) => setCantidad(Number(e.target.value))}
                />
            </div>
            <div className='campo'>
                <label htmlFor='categoria' >Categoria</label>
                <select 
                    id='categoria' 
                    value={categoria} 
                    onChange={(e) => setCategoria(e.target.value)}
                >
                    <option value=''>-- Seleccione</option>
                    <option value='ahorro'>Ahorro</option>
                    <option value='comida'>Comida</option>
                    <option value='casa'>Casa</option>
                    <option value='gastos'>Gastos Varios</option>
                    <option value='salud'>Salud</option>
                    <option value='suscripciones'>Suscripciones</option>
                </select>
            </div>
            
            <input
                type='submit'
                value='Añadir Gasto'
            />
            
        </form>
    </div>
  )
}

export default Modal