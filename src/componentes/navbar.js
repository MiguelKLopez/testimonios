import React from "react";
import '../css/navbar.css';


const Navbar = () => {  
    return (
        <nav className="contenedor-nav">
            <ul>
                <div className="hover-nav">
                    <li><a href="www.google.com">Inicio</a></li>
                </div>
                <div className="hover-nav">
                    <li><a href="www.google.com">Acerca de</a></li>
                </div>
                <div className="hover-nav">
                    <li><a href="www.google.com">Contactanos</a></li>
                </div>
            </ul>
        </nav>
    );
  };

export default Navbar;