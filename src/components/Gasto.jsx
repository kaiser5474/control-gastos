import React from 'react'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
  import 'react-swipeable-list/dist/styles.css';

import { formatearFecha, formatearNumero } from '../helpers'
import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'

const diccionario = {
        ahorro : IconoAhorro,
        comida : IconoComida,
        casa : IconoCasa,
        gastos : IconoGastos,
        salud : IconoSalud,
        ocio : IconoOcio,
        suscripciones : IconoSuscripciones
}

const Gasto = ({
    gasto, 
    setGastoEditar, 
    setModal, 
    setTransiccion, 
    modal,  
    setGastoEliminar}) => {
    const {nombre, categoria, id, cantidad, fecha} = gasto

    //funciones 
    const cambiosModal = (gasto) => {
        setGastoEditar(gasto)
        setModal(true)
        setTimeout(() => {
            setTransiccion(true)
          }, 300);
    }

    const eliminarGasto = () => {
        if(confirm("Esta seguro en eliminar el gasto!!"))
        {
            setGastoEliminar(gasto.id)
        }
       
    }

    const leadingActions = () => (
        <LeadingActions>
          <SwipeAction onClick={() => cambiosModal(gasto)}>
            Editar
          </SwipeAction>
        </LeadingActions>
      );
    
      const trailingActions = () => (
        <TrailingActions>
          <SwipeAction      
            onClick={() => eliminarGasto()}
          >
            Eliminar
          </SwipeAction>
        </TrailingActions>
      );
  return (
    <SwipeableList>
    <SwipeableListItem
      leadingActions={leadingActions()}
      trailingActions={trailingActions()}
    >
      <div className={`gasto sombra ${modal ? 'ocultarDiv' : ''}`}>
        <div className='contenido-gasto'>
            <img 
                src={diccionario[categoria]}
                alt='Control de gastos'
            />
            <div className='descripcion-gasto'>
                <p className='categoria'>{categoria}</p>
                <p className='nombre-gasto'>{nombre}</p>
                <p className='fecha-gasto'>
                    Agregado el: {''}
                    <span>{formatearFecha(fecha)}</span>    
                </p>                
            </div>            
        </div>
        <p className='cantidad-gasto'>{formatearNumero(cantidad)}</p>
    </div>
    </SwipeableListItem>
  </SwipeableList>    
  )
}

export default Gasto