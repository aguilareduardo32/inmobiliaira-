import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


class InmuebleDetail extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        this.getSingleInmueble()
    }

    getSingleInmueble = () => {
   
        const { params } = this.props.match;
        axios.get(`http://localhost:5000/api/${params.id}`)
        .then( responseFromApi =>{
           const theInmueble = responseFromApi.data;
           this.setState(theInmueble)
           console.log(theInmueble)
           
        }) 
        .catch((err) => {
            console.log(err)
        })
    }

    render(){
        return(
            <div>
                <h3>{this.state.titulo}</h3>
            </div>
        )
    }
}

export default withRouter(InmuebleDetail); 