import React, { useState } from 'react'
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIfValid}) => {
    //Hooks
    const [mensaje, setMensaje] = useState({})

    const handlePresupuesto = (e) => {
        e.preventDefault();
        const mensajeObj = {
            msg: '',
            tipo: ''
        }
        if(!presupuesto || presupuesto < 0){
            mensajeObj.msg = "No es un presupesto valido"
            mensajeObj.tipo = "error"
            setMensaje(mensajeObj)
        }else{
            //mensajeObj.msg = "Presupesto valido"
            //mensajeObj.tipo = "success"
            setMensaje("")
            setIfValid(true)
        }
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario' onSubmit={(e)=> handlePresupuesto(e)}>
            <div className='campo'>
                <label>Definir presupuesto</label>
                <input
                    className='nuevo-presupuesto'
                    type='number'
                    placeholder='Añade tu presupesto'
                    value={presupuesto}
                    onChange={(e)=>setPresupuesto(Number(e.target.value))}
                />
                <input type='submit' value='Añadir'/>
            </div>
            { mensaje && <Mensaje mensaje = {mensaje}/>  }
        </form>
    </div>
  )
}

export default NuevoPresupuesto