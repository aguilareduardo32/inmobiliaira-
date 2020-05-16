import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const InmuRow = (props) => {
    const { titulo,  recamaras, baños, descripcion, metros, direccion, precio, fotos} = props;

    return (
        
            
                     
            <div class="pilar">

                <div class="rectangle">
                <Carousel  swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
       
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
       
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px">
        
                <img className="casa2" src={fotos}/>

                </Carousel>
                
                <div className="desc">
                <h1>{titulo}</h1>
                <br/>
              
                <p>{direccion}</p>
               
                <p>recamaras: {recamaras}</p>
               
               
                <h5>${precio}</h5>
                </div>

                    
                </div>
            </div>

                
        
    )
}
export default InmuRow;