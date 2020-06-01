import React, { Component, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Link } from "react-router-dom";



const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

class InmuDe extends Component {
    constructor(props) {
        super(props)
    console.log(this.props)
    
        }


  /* const images = [
    {
      original: image1,
    },
    {
      original: image2,
    },
    {
      original: image3,
    },
  ]; */
   

    

 render(){ 

    var imagesC = []
  
   Object.keys(this.props.imagesCollection).map(function(key, index) {
       this.props.imagesCollection[key] = imagesC
     })
   
    imagesC.map((item) => {
        return { original: item, thumbnail: item };
      })
  

  return (
    <div class="pilar">
         
         {this.props.imagesCollection && this.props.imagesCollection.lenght > 0 ?  
         <p> {this.props.imagesCollection.lenght}</p> : <div>0</div>}
      
          <div className="desc">
            <h1>{this.props.titulo}</h1>
        

            <p>📍{this.props.direccion}</p>

            <p>recamaras: {this.props.recamaras}</p>
             <p>construidos: {this.props.metros}m2</p>

            <h5>${this.props.precio}</h5>
            
            <Link to={`/${this.props.id}`}>   <input className="e"  type="submit" value="Ver mas" /></Link> 
          </div>
        
      </div>
      
  );
}
}
export default InmuDe;
