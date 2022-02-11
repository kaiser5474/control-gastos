import React from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({presupuesto, setPresupuesto, ifValid, setIfValid}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        {
            ifValid 
            ? 
            <ControlPresupuesto
                presupuesto = {presupuesto}
            />
            :   
            <NuevoPresupuesto
                presupuesto = {presupuesto}
                setPresupuesto = {setPresupuesto}
                setIfValid = {setIfValid}
            />  
            
        }
        
    </header>
  )
}

export default Header