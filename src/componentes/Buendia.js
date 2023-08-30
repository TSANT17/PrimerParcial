
import React, { useState } from 'react';

export default function Buendia() {
    const [hora, setHora] = useState('');
    const [nombre, setNombre] = useState(0);
    const [saludo, setSaludo] = useState('');
    const loOprime = (event) => {
      setNombre(event.target.value);
    };
    const loOprime2 = (event) => {
        setHora(event.target.value);
      };
    const buendiaFunctions = (e) => {
      e.preventDefault();
      const horaNum = parseInt(hora, 10);

      if (horaNum >= 0 && horaNum < 12) {
        setSaludo(`Buenos días, ${nombre}`);
        console.log(`Buenos días, ${nombre}`);
      } else if (horaNum >= 12 && horaNum < 18) {
        setSaludo(`Buenas tardes, ${nombre}`);
        console.log(`Buenos tardes, ${nombre}`);
      } 
        else if (horaNum < 24) {
            setSaludo(`Buenas noches, ${nombre}`);
            console.log(`Buenos noches, ${nombre}`);
      } else {
        setSaludo(nombre+" mi loco, pon una hora correcta")
        console.log("mi loco, pon una hora correcta");
      }
     
    
      
    };
  return (
    <form>
    <label>
      ingrese su nombre
    </label>
    <input type="text"  onChange={loOprime} />
    <label>
    <br/> ingrese la hora actual en este formato 24h "00:00"
    </label>
      <input type="text" onChange={loOprime2} />
      <br/><button onClick={buendiaFunctions}>Registrar</button>
      <p>{`${saludo}`}</p>
   </form>
  )
}
