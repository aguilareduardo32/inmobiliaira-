import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class FormaEnviada2 extends Component {
    
    
    render(){
        return(
            <div className="recibido">
                <div className="columnRecibido">
                    
                    <h1>Hemos recibido tus datos en un momento nos comunicaremos contigo</h1>
                    <br/>
                </div>
                <div>
                <Link  to="/inmuebles"><i className="but">aceptar</i></Link>
                </div>
            </div>
    )
    }
}

export default withRouter(FormaEnviada2);

