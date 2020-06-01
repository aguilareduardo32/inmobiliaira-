import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Link } from "react-router-dom";
import InmuebleV from './3/InmuebleV'

class InmuebleDetail extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        this.getSingleInmueble();
        
    }
    
    

    getSingleInmueble = () => {
   
        const { params } = this.props.match;
        axios.get(`http://localhost:5000/api/${params.id}`)
                .then( responseFromApi =>{
                    console.log(responseFromApi.data)
                    const theInmueble = responseFromApi.data;
                    this.setState(theInmueble);
                })
                .catch((err) => {
                    console.log(err)
                })
            }

            
    
   
    render(){
       
          return(
              <div>
                    <InmuebleV inmuebleee={this.state}/>
                          
              </div>
          )
        
        
    }
}

export default withRouter(InmuebleDetail); 