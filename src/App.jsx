import { useEffect, useState } from 'react'
import './App.css'
import ListadoGastos from './components/ListadoGastos'
import Header from './components/Header'
import Modal from './components/Modal'
import IconoNuevo from './img/nuevo-gasto.svg'
import { paraId } from './helpers'

function App() {
  //Hooks
  const [presupuesto, setPresupuesto] = useState(0)
  const [ifValid, setIfValid] = useState(false)
  const [modal, setModal] = useState(false)
  const [transiccion, setTransiccion] = useState(false)
  const [gastos, setGastos] = useState([])
  const [gastoEditar, setGastoEditar] = useState({})
  const [gastoEliminar, setGastoEliminar] = useState("")

  //funciones
  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})
    setTimeout(() => {
      setTransiccion(true)
    }, 300);
  }

  const guardarGasto = (gasto) => {
    gasto.id = paraId()
    gasto.fecha = Date.now()
    setGastos([...gastos, gasto])
  }

  //use effect de editar
  useEffect(() => {
    const gastosActualizados = gastos.map( gastoState => gastoState.id === gastoEditar.id ? gastoEditar : gastoState)
    setGastos(gastosActualizados)
    //
  }, [gastoEditar])
  
  //use effect de eliminar
  useEffect(() => {
    const gastosActualizados = gastos.filter((gastos) => gastos.id !== gastoEliminar)
    setGastos(gastosActualizados)
    setGastoEliminar("")
  }, [gastoEliminar])

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        ifValid= {ifValid}
        setIfValid= {setIfValid}
        gastos={gastos}        
      />

      {
        modal && 
       <Modal 
        setModal = {setModal}
        transiccion = {transiccion}
        setTransiccion = {setTransiccion}
        guardarGasto = {guardarGasto}
        gastos = {gastos}
        gastoEditar = {gastoEditar}
        setGastoEditar = {setGastoEditar}
       />
      }
      {
        ifValid && (
          <>
            <main>
              <ListadoGastos
                gastos = {gastos}
                setGastoEditar = {setGastoEditar}
                setModal = {setModal}
                transiccion = {transiccion}
                setTransiccion = {setTransiccion}
                modal = {modal}
                setGastoEliminar = {setGastoEliminar}
              />
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
    </div>

  )
}

export default App
