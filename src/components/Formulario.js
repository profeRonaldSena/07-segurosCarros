import styled from '@emotion/styled'
import { useState } from 'react'

const DIV = styled.div`
 display: flex;
 margin-bottom: 1rem;
 align-items: center;
`
const LABEL = styled.label`
 flex: 0 0 100px;
`
const SELECT = styled.select`
 display: block;
 width: 100%;
 padding: 1rem;
 border: 1px solid #e1e1e1;
 -webkit-appearance: none;
`
const INPUT = styled.input`
 margin: 0 1rem;
`
const BUTTON = styled.button`
 background-color: #00838f;
 font-size: 16px;
 width: 100%;
 padding: 1rem;
 color: #fff;
 text-transform: uppercase;
 font-weight: bold;
 border: none;
 margin-top: 2rem;

 &:hover {
  background-color: #26c6da;
  cursor: pointer;
 }
`
const ERROR = styled.div`
 background-color: red;
 color: white;
 padding: 1rem;
 width: 100%;
 text-align: center;
`

const Formulario = () => {
 // crear estado
 const [datos, setDatos] = useState({
  marca: '',
  year: '',
  plan: '',
 })
 //  extraer extados "destructuring"
 const { marca, year, plan } = datos
 //  leer el formulario y poner los datos en el state
 const obtenerInfo = (e) => {
  setDatos({
   ...datos,
   [e.target.name]: e.target.value,
  })
 }
 //  validar formulario cuando el usuario presiona el boton enviar
 const [error, setError] = useState(false)
 const cotizarSeguro = (e) => {
  e.preventDefault()
  // campos vacios
  if (marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
   setError(true)
   return
  }
  setError(false)
 }

 return (
  <form onSubmit={cotizarSeguro}>
   {error ? <ERROR>Todos los campos son obligatorios</ERROR> : null}
   <DIV>
    <LABEL>Marca</LABEL>
    <SELECT name='marca' value={marca} onChange={obtenerInfo}>
     <option value=''>---Seleccione---</option>
     <option value='americano'>Americano</option>
     <option value='europeo'>Europeo</option>
     <option value='asiatico'>Asiatico</option>
    </SELECT>
   </DIV>
   <DIV>
    <LABEL>Año</LABEL>
    <SELECT name='year' value={year} onChange={obtenerInfo}>
     <option value=''>---Seleccione---</option>
     <option value='2023'>2023</option>
     <option value='2022'>2022</option>
     <option value='2021'>2021</option>
     <option value='2020'>2020</option>
     <option value='2019'>2019</option>
     <option value='2018'>2018</option>
     <option value='2017'>2017</option>
     <option value='2016'>2016</option>
     <option value='2015'>2015</option>
    </SELECT>
   </DIV>
   <DIV>
    <LABEL>Plan</LABEL>
    <INPUT
     type='radio'
     name='plan'
     value='basico'
     checked={plan === 'basico'}
     onChange={obtenerInfo}
    />
    Basico
    <INPUT
     type='radio'
     name='plan'
     value='completo'
     checked={plan === 'completo'}
     onChange={obtenerInfo}
    />
    Completo
   </DIV>
   <BUTTON type='submit'>Cotizar</BUTTON>
  </form>
 )
}

export default Formulario
