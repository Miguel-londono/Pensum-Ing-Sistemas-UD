import React from 'react';
import PlanDeEstudios from './PlanDeEstudios';
import './PlanDeEstudios.css';

function App() {
  return (
    <div className="App">
      <h1>Simulación de cambio de Pensum</h1>
      <h2>Escoja las materias que ya ha aprobado del pensum anterior haciendo click <br></br>sobre ellas, o haga click sobre el nivel 
        correspondiente para seleccionar todas <br></br>las materias de ese nivel</h2>
      <PlanDeEstudios />
    </div>
  );
}

export default App;
