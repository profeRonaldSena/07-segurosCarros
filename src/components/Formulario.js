const Formulario = () => {
 return (
  <form>
   <div>
    <label>Marca</label>
    <select>
     <option value=''>---Seleccione---</option>
     <option value='americano'>Americano</option>
     <option value='europeo'>Europeo</option>
     <option value='asiatico'>Asiatico</option>
    </select>
   </div>
   <div>
    <label>Año</label>
    <select>
     <option value='2023'>2023</option>
     <option value='2022'>2022</option>
     <option value='2021'>2021</option>
     <option value='2020'>2020</option>
     <option value='2019'>2019</option>
     <option value='2018'>2018</option>
     <option value='2017'>2017</option>
     <option value='2016'>2016</option>
     <option value='2015'>2015</option>
    </select>
   </div>
   <div>
    <label>Plan</label>
    <input type='radio' name='plan' value='basico' />
    Basico
    <input type='radio' name='plan' value='completo' />
    Completo
   </div>
  </form>
 )
}

export default Formulario
