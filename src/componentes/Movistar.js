import React, { useState } from 'react';

export default function Movistar() {
    const [minutosTotales, setMinutosTotales] = useState(0);
    const [coste, setCoste] = useState(0);
    const loOprime = (event) => {
      setMinutosTotales(event.target.value);
    };
  
    const pasarSegundillosToTiempo = (e) => {
      e.preventDefault();
        let costes = ((minutosTotales-3)*50)+100
        if (minutosTotales <= 3) {
            console.log(`te costara 100 pesos uwu`);
            setCoste(100);
        } else {
            setCoste(costes);
            console.log("te costara " + costes);

        }

    };
  return (
    <form>
    <label>
      ingrese el tiempo de llamada
    </label>
      <input type="number" value={minutosTotales} onChange={loOprime} />
      <button onClick={pasarSegundillosToTiempo}>Calcular</button>
      <p>{"te costara " + coste}</p>
   </form>
  )
}
