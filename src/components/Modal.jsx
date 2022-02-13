import React, { useEffect, useState } from 'react'
import cerrar from './../img/cerrar.svg'
import Mensaje from './Mensaje'

const Modal = ({
    setModal, 
    transiccion, 
    setTransiccion, 
    guardarGasto, 
    gastos,
    gastoEditar, 
    setGastoEditar
}) => {
    //hooks 
    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [categoria, setCategoria] = useState("")
    const [mensaje, setMensaje] = useState({})
    const [editando, setEditando] = useState(false)

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
        
        //validando que todos los campos esten llenos
        if([nombre, cantidad, categoria].includes('')){            
            mensajeObj.msg = "Todos los campos son obligatorios"
            mensajeObj.tipo = "error"
            setMensaje(mensajeObj)
        }else{    
            // si todo los campos estan llenos y estamos editando ejecuta las siguientes lineas de codigo
            if(editando){       
                gastoObj.id = gastoEditar.id
                gastoObj.fecha = gastoEditar.fecha
                setGastoEditar(gastoObj)
            }
            //si no estamos editando es que estamos insertando por lo tanto ejecuta las siguientes lineas
            else{
                setMensaje({})
                guardarGasto(gastoObj)
            }    
            cerrarModal();
        }        
      }

    // aqui establecemos todos los campos por defecto y cerramos el modal
    const cerrarModal = () => {
        setTransiccion(false)
        setNombre("")
        setCantidad("")
        setCategoria("")
        setTimeout(() => {
            setModal(false)
            setGastoEditar({})
          }, 300);
    }
    
    useEffect(() => {        
        //compruebo que gastoEditar tenga algun valor
        if(Object.keys(gastoEditar).length > 0){
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setEditando(true)
        }        
    }, [])

  return (
    <div className='modal'>   
        <div className="cerrar-modal">   
            <img 
                className='cerrar-modal'
                src={cerrar}
                onClick={cerrarModal}
            />
        </div>  
        <form 
            onSubmit={(e)=> handleSubmit(e)} 
            className={`formulario ${transiccion ? 'animar' : 'cerrar'}`}
        >            
            <legend>{editando ? 'Editando Gasto' : 'Nuevo Gasto'}</legend>    
            
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
                    <option value='ocio'>Ocio</option>
                    <option value='suscripciones'>Suscripciones</option>
                </select>
            </div>
            
            <input
            type='submit'
            value={`${editando ? 'Guardar Cambios' : 'Añadir Gasto'}`}
            />           
        </form>
    </div>
  )
}

export default Modal