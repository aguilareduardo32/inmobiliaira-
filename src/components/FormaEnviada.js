import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class FormaRecibida extends Component {
    handleChange = (event) => {  
        
        this.props.history.push('/')
        
    }
    render(){
        return(
            <div className="recibido">
                <div className="columnRecibido">
                    
                    <h1>Hemos recibido tus datos en un momento nos comunicaremos</h1>
                    <br/>
                </div>
                <div>
                <Link  to="/"><i className="but">aceptar</i></Link>
                </div>
            </div>
    )
    }
}

export default withRouter(FormaRecibida)

