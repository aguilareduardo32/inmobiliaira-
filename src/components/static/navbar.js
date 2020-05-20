import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../../images/logo.png';



const navbar = () => {
 return (
     <nav className="nav-style">
     
    <Link to="/">    <img className="logo" src={Background}/></Link>
         <ul>
           
             <li><Link to='/inmuebles'>Inmuebles en venta o renta</Link></li>
             <li><Link to='/informesVenta'>Vende o renta tu inmueble</Link></li>
             
             <li><Link to='/contactoBase'>Contacto</Link></li>
         </ul>
     </nav>
 )   
}

export default navbar;