import React from "react";
import '../css/testimonios.css'; 

function Testimonios(props){
  return(
    <div className="contenedor-testimonio">   
      <img 
        className="img-testimoio"
        src={require(`../img/personas-${props.img}.jpg`)}
        alt="Imagen persona"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong>
        </p>
        <p className="cargo-testimonio">
          <strong>{props.cargo}</strong> en <strong>{props.empresa}</strong>  
        </p> 
        <p className="texto-testimonio">
          {props.testimonio}
        </p>
      </div>
    </div>
  );
};

export default Testimonios;