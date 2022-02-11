import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Modal from './components/Modal'
import IconoNuevo from './img/nuevo-gasto.svg'

function App() {
  //Hooks
  const [presupuesto, setPresupuesto] = useState(0)
  const [ifValid, setIfValid] = useState(false)
  const [modal, setModal] = useState(false)

  //funciones
  const handleNuevoGasto = () => {
    setModal(true)
  }

  return (
    <div>
      <Header
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        ifValid= {ifValid}
        setIfValid= {setIfValid}
      />
      {
        ifValid && 
        (<div className='nuevo-gasto'>
          <img 
            src={IconoNuevo}
            alt='icono nuevo gasto'
            onClick={handleNuevoGasto}
          />
        </div>)
      }
      {
        modal && 
       <Modal 
        setModal = {setModal}
       />
      }
     
    </div>

  )
}

export default App
