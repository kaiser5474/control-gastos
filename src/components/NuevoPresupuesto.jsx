import React, { useState } from 'react'
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
    //Hooks
    const [mensaje, setMensaje] = useState({})

    const handlePresupuesto = (e) => {
        e.preventDefault();
        const mensajeObj = {
            msg: '',
            tipo: ''
        }
        if(!Number(presupuesto) || Number(presupuesto) < 0){
            mensajeObj.msg = "No es un presupesto valido"
            mensajeObj.tipo = "error"
            setMensaje(mensajeObj)
        }else{
            mensajeObj.msg = "Presupesto valido"
            mensajeObj.tipo = "success"
            setMensaje(mensajeObj)
        }
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario' onSubmit={(e)=> handlePresupuesto(e)}>
            <div className='campo'>
                <label>Definir presupuesto</label>
                <input
                    className='nuevo-presupuesto'
                    type='text'
                    placeholder='Añade tu presupesto'
                    value={presupuesto}
                    onChange={(e)=>setPresupuesto(e.target.value)}
                />
                <input type='submit' value='Añadir'/>
            </div>
            { mensaje && <Mensaje mensaje = {mensaje}/>  }
        </form>
    </div>
  )
}

export default NuevoPresupuesto