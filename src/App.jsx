import { useEffect, useState } from 'react'
import './App.css'
import ListadoGastos from './components/ListadoGastos'
import Header from './components/Header'
import Modal from './components/Modal'
import IconoNuevo from './img/nuevo-gasto.svg'
import { paraId } from './helpers'
import Filtros from './components/Filtros'

function App() {
  //Hooks
  const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem('presupuesto' ?? 0)) )
  const [ifValid, setIfValid] = useState(false)
  const [modal, setModal] = useState(false)
  const [transiccion, setTransiccion] = useState(false)
  const [gastos, setGastos] = useState(JSON.parse(localStorage.getItem('gastos')) ?? [])
  const [gastoEditar, setGastoEditar] = useState({})
  const [gastoEliminar, setGastoEliminar] = useState('')
  const [filtro, setFiltro] = useState('')
  const [gastoFiltrado, setGastoFiltrado] = useState([])

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

  //useEffect para guardar el presupesto
  useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto ?? 0)
  }, [presupuesto])

  //useEffect para decir que si tenemos algo mayor a 0 en localStorage se ponga presupesto valido
  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto' ?? 0))
    if(presupuestoLS > 0){
      setIfValid(true)
    }
  }, [])

  //useEffect para guardar los gastos
  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(gastos))
  }, [gastos])

  //useEffect para filtrar los gastos, se almacena en un State nuevo
  useEffect(() => {
    if(filtro){
      const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro && gasto)
      setGastoFiltrado(gastosFiltrados)
    }   
  }, [filtro])
  

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
              <Filtros
                filtro = {filtro}
                setFiltro = {setFiltro}
              />
              {!filtro ?
                <ListadoGastos
                gastos = {gastos}
                setGastoEditar = {setGastoEditar}
                setModal = {setModal}
                transiccion = {transiccion}
                setTransiccion = {setTransiccion}
                modal = {modal}
                setGastoEliminar = {setGastoEliminar}
              />
              : <ListadoGastos
                gastos = {gastoFiltrado}
                setGastoEditar = {setGastoEditar}
                setModal = {setModal}
                transiccion = {transiccion}
                setTransiccion = {setTransiccion}
                modal = {modal}
                setGastoEliminar = {setGastoEliminar}
            />
              }              
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
