import Header from './components/Header'
import styled from '@emotion/styled'

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
  </DIV1>
 )
}
