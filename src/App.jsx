import { useState } from 'react'
import './App.css'
import ListadoGastos from './components/ListadoGastos'
import Header from './components/Header'
import Modal from './components/Modal'
import IconoNuevo from './img/nuevo-gasto.svg'
import { paraId } from './helpers'

function App() {
  //Hooks
  const [presupuesto, setPresupuesto] = useState(0)
  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)
  const [ifValid, setIfValid] = useState(false)
  const [modal, setModal] = useState(false)
  const [transiccion, setTransiccion] = useState(false)
  const [gastos, setGastos] = useState([])

  //funciones
  const handleNuevoGasto = () => {
    setModal(true)
    setTimeout(() => {
      setTransiccion(true)
    }, 500);
  }

  const guardarGasto = (gasto) => {
    gasto.id = paraId()
    console.log(gasto)
    setGastos([...gastos, gasto])
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
        modal && 
       <Modal 
        setModal = {setModal}
        transiccion = {transiccion}
        setTransiccion = {setTransiccion}
        guardarGasto = {guardarGasto}
        gastos = {gastos}
       />
      }
      {
        ifValid && (
          <>
            <main>
              <ListadoGastos
                gastos = {gastos}
              />
            {/* {(
          gastos.map((gasto)=> {
            return (
              <>
            <Gastos
              key = {gasto.id}
              gasto = {gasto}
              ifValid = {ifValid}
              modal = {modal}
            />
            </>
            )
          })
        )} */}
            </main>
            <div className='nuevo-gasto'>
              <img 
                src={IconoNuevo}
                alt='icono nuevo gasto'
                onClick={handleNuevoGasto}
                className={`${modal ? 'ocultarDiv' : ''}`}
              />
            </div>
          </>
        )
      }
      {
        
      }
    </div>

  )
}

export default App
