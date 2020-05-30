import React from 'react';
import First from './1/first'
import List from './1/list';
import Serv from './1/servicios';
import Background from '../images/renta.jpeg';
import Background1 from '../images/2.jpeg';
import { Link } from 'react-router-dom';





const Home = () => {
    return (
        
        <div className="home">
            <br/>
            <First/>


          
            <br/>
            <br/>

            <div  className="servicios1">
        
        
        <p className="servi">Servicios Inmobiliarios</p>
        <br/>
        <br/>
      
        
            <div className="card2 nou ">
            <img className="serv1" src={Background}/>
            <div className="ser">
            <br/>
            
            <h2 className="servInfo">Compra o renta de inmuebles</h2>
            <br/>
            
            <p className="servInfoP">Somos especialistas en el mercado y contamos con herramientas exclusivas que te permitirán encontrar en nuestro sistema, propiedades en un valor real de mercado.</p>
            <Link to='/informesComRen'><button className="button1">Ver mas</button></Link>
            </div>
            </div>
      
            
            <div className="card2 ">
       
            <img className="serv1" src={Background1}/>
            <div className="ser">
            <br/>
            
            <h2 className="servInfo">Vender o arrendar un inmueble</h2>
            <br/>
            <p className="servInfoP"> Con nosotros encontrarás el compromiso de un servicio personalizado, ágil y transparente, que gracias a nuestras herramientas te permitirá encontrar al comprador ideal en el menor tiempo posible.</p>
            <Link to='/informesVenta'><button className="button1">Ver mas</button></Link>
            </div>
            </div>
</div>

            <List/>
            
           
       
            
            
        </div>
     
    )
}

export default Home;