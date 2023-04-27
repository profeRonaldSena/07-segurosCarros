import styled from '@emotion/styled'
import Header from './components/Header'
import Formulario from './components/Formulario'

const DIV1 = styled.div`
 max-width: 600px;
 margin: 0 auto;
`
const DIV2 = styled.div`
 background-color: #fff;
 padding: 3rem;
`

export default function App() {
 return (
  <DIV1>
   <Header titulo='Cotizador de Seguros de Autos' />
   <DIV2>
    <Formulario />
   </DIV2>
  </DIV1>
 )
}
