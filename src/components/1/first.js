import React from 'react'
import Background from '../../images/real-estate.jpg';
import { Link } from 'react-router-dom';

var sectionStyle = {
 
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    height: '500px' ,
    
};

const First = () => {
    return (
        <div  className="servicios" style={ sectionStyle }>
        <br/>
        
            
            <div>
            <Link to='/inmuebles'> <div className="first uno">
                 <h1>COMPRAR O RENTAR UN INMUEBLE</h1>
                </div>
                </Link> 
                <Link to='/ofrece'>   <div className="first">
                    <h1>VENDER O ARRENDAR UN INMUEBLE</h1>
                </div></Link> 
            </div>
        </div>
    )

}
export default First