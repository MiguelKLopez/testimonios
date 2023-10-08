import './App.css';
import Testimonios from './componentes/testimonios.js';
import Navbar from './componentes/navbar.js';


function App() {
  return (
    <div className="App">
      <Navbar/> 
      <div className='contenedor-principal'> 
        <h1>Lo que dicen nuestros participantes</h1>
          <Testimonios 
            nombre = 'Miguel Ángel López Pacheco'
            img = 'uno'
            cargo = 'Alumno'
            empresa = 'UTPaquimé'
            testimonio = 'Me gusta la universidad y la institución academica.' />

          <Testimonios 
            nombre = 'Jose Manuel Fuentes Carrillo'
            img = 'tres'
            cargo = 'Maestro'
            empresa = 'UTPaquimé'
            testimonio = 'No saben nada y me estreso.' />

          <Testimonios 
            nombre = 'Augusto Prieto Ramirez Villareal'
            img = 'uno'
            cargo = 'Conserje'
            empresa = 'UTPaquimé'
            testimonio = 'Pongan papel.' />

          <Testimonios 
            nombre = 'Miguel Ángel López Pacheco'
            img = 'uno'
            cargo = 'Alumno'
            empresa = 'UTPaquimé'
            testimonio = 'Me gusta la universidad y la institución academica.' />

      </div>
    </div>
    
  );
}

export default App;
