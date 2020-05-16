import React from 'react';
import First from './1/first'
import List from './1/list';
import Serv from './1/servicios';
import Background from '../images/renta.jpeg';
import Background1 from '../images/2.jpeg';





const Home = () => {
    return (
        
        <div className="home">
            <br/>
            <First/>


          
            <br/>
            <br/>
            <List/>
            
            <div  className="servicios1">
        
        
            <h1>Servicios Inmobiliarios</h1>
            <br/>
            <br/>
          
            
                <div className="card2 nou ">
                <img className="serv1" src={Background}/>
                
                <h3 className="servInfo">Compra o renta de inmuebles</h3>
                <br/>
                
                <p className="servInfoP">Somos especialistas en el mercado y contamos con herramientas exclusivas que te permitirán encontrar en nuestro sistema, propiedades en un valor real de mercado.</p>
                </div>
          
                
                <div className="card2 ">
                <img className="serv1" src={Background1}/>
                
                <h3 className="servInfo">Vender o arrendar un inmueble</h3>
                <br/>
                <p className="servInfoP">En Tecnocasa sabemos que vender una propiedad no es simplemente subir un anuncio a un portal. Con nosotros encontrarás el compromiso de un servicio personalizado, ágil y transparente, que gracias a nuestras herramientas te permitirá encontrar al comprador ideal en el menor tiempo posible.</p>
               
                </div>
</div>

       
            
            
        </div>
     
    )
}

export default Home;