
import React, { useState } from 'react';

export default function TiempoSegundos() {
    const [segundosTotales, setSegundosTotales] = useState(0);
    const [horitas, setHoritas] = useState(0);
    const [minutitos, setMinutitos] = useState(0);
    const [segundillos, setSegundillos] = useState(0);
    const loOprime = (event) => {
      setSegundosTotales(event.target.value);
    };
  
    const pasarSegundillosToTiempo = (e) => {
      e.preventDefault();
  
      const horas = Math.floor(segundosTotales / 3600);
      const mins = Math.floor((segundosTotales % 3600) / 60);
      const sexs = segundosTotales % 60;
  
      setHoritas(horas);
      setMinutitos(mins);
      setSegundillos(sexs);
      console.log(`${horas} horas, ${mins} minutos, ${sexs} segundos`);
    };
  return (
    <form>
    <label>
      ingrese el tiempo en segundos
    </label>
      <input type="number" value={segundosTotales} onChange={loOprime} />
      <button onClick={pasarSegundillosToTiempo}>Convertir</button>
      <p>{`${horitas} horas, ${minutitos} minutos, ${segundillos} segundos`}</p>
   </form>
  )
}
