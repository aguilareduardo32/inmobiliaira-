import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Background from '../../images/casa1.jpeg';
import { Link } from 'react-router-dom';
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

const List = () => {
    return (
        <div className="">
        <h1>Inmuebles en venta y renta</h1>
        <br/>
        <br/>
        
        <Carousel  swipeable={false}
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

            
           
            
            <div className="column">
                <div className="card">
                <img className="casa" src={Background}/>
                <h3>Casa en pedregal</h3>
                <h5>Venta</h5>
                <p>320m2 <br/>
                    5 habitaciones<br/>
                    3 baños<br/>
                    25,000,000
                </p>
                <Link to='/quiere'><button className="button1">Mas información</button></Link>
                </div>
            </div>

            <div className="column">
                <div className="card">
                <img className="casa" src={Background}/>
                <h3>Casa en pedregal</h3>
                <h5>Venta</h5>
                <p>320m2 <br/>
                    5 habitaciones<br/>
                    3 baños<br/>
                    25,000,000
                </p>
                <Link to='/quiere'><button className="button1">Mas información</button></Link>
                </div>
            </div>
            
            <div className="column">
                <div className="card">
                <img className="casa" src={Background}/>
                <h3>Casa en pedregal</h3>
                <h5>Venta</h5>
                <p>320m2 <br/>
                    5 habitaciones<br/>
                    3 baños<br/>
                    25,000,000
                </p>
                <Link to='/quiere'><button className="button1">Mas información</button></Link>
                </div>
            </div>
            
            <div className="column">
                <div className="card">
                <img className="casa" src={Background}/>
                <h3>Casa en pedregal</h3>
                <h5>Venta</h5>
                <p>320m2 <br/>
                    5 habitaciones<br/>
                    3 baños<br/>
                    25,000,000
                </p>
                <Link to='/quiere'><button className="button1">Mas información</button></Link>
                </div>
            </div>
            <div className="column">
                <div className="card">
                <img className="casa" src={Background}/>
                <h3>Casa en pedregal</h3>
                <h5>Venta</h5>
                <p>320m2 <br/>
                    5 habitaciones<br/>
                    3 baños<br/>
                    25,000,000
                </p>
                <Link to='/quiere'><button className="button1">Mas información</button></Link>
                </div>
            </div>
            <div className="column">
                <div className="card">
                <h3>Card 4</h3>
                <p>Some text</p>
                <p>Some text</p>
                </div>
            </div>
            <div className="column">
                <div className="card">
                <h3>Card 4</h3>
                <p>Some text</p>
                <p>Some text</p>
                </div>
            </div>
            

            </Carousel>
</div>
    )
}

export default List 