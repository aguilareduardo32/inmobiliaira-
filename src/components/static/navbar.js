import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../../images/logo.png';



const navbar = () => {
 return (
     <nav className="nav-style">
     
        <img className="logo" src={Background}/>
         <ul>
           
             <li><Link to='/quiere'>Inmuebles en venta o renta</Link></li>
             <li><Link to='/ofrece'>Vende o renta tu inmueble</Link></li>
             
             <li><Link to='/contacto'>Contacto</Link></li>
         </ul>
     </nav>
 )   
}

export default navbar;