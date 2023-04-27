import styled from '@emotion/styled'

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

 &:hover {
  background-color: #26c6da;
  cursor: pointer;
 }
`

const Formulario = () => {
 return (
  <form>
   <DIV>
    <LABEL>Marca</LABEL>
    <SELECT>
     <option value=''>---Seleccione---</option>
     <option value='americano'>Americano</option>
     <option value='europeo'>Europeo</option>
     <option value='asiatico'>Asiatico</option>
    </SELECT>
   </DIV>
   <DIV>
    <LABEL>Año</LABEL>
    <SELECT>
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
    <INPUT type='radio' name='plan' value='basico' />
    Basico
    <INPUT type='radio' name='plan' value='completo' />
    Completo
   </DIV>
   <BUTTON type='button'>Cotizar</BUTTON>
  </form>
 )
}

export default Formulario
