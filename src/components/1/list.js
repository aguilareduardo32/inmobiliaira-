import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Background from "../../images/casa1.jpeg";
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
    breakpoint: { max: 1024, min: 570 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 570, min: 0 },
    items: 1,
  },
};

const List = () => {
  return (
    <div className="cardHolder">
      <div className="row">
        <div className="col-12">
          <p className="titulo"> Inmuebles mas vistos</p>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerclassName="carousel-container"
            /* removeArrowOnDeviceType={["tablet", "mobile"]} */
            dotListclassName="custom-dot-list-style"
            itemclassName="carousel-item-padding-40-px"
          >
            <div className="Xcolumn">
              <div className="Xcard">
                <img className="Xcasa" src={Background} />
                <h1>1- Casa en venta pedregal</h1>
                <br />
                <h3>320m2 </h3>
                <h3>
                  {" "}
                  5 habitaciones
                  <br />
                </h3>
                <h3>
                  {" "}
                  3 baños
                  <br />
                </h3>
                <h3> $ 25,000,000</h3>
                <br />
                <Link to="/quiere">
                  <button className="button1">Ver</button>
                </Link>
              </div>
            </div>

            <div className="Xcolumn">
              <div className="Xcard">
                <img className="Xcasa" src={Background} />
                <h1>2- Casa en venta pedregal</h1>
                <br />
                <h3>320m2 </h3>
                <h3>
                  {" "}
                  5 habitaciones
                  <br />
                </h3>
                <h3>
                  {" "}
                  3 baños
                  <br />
                </h3>
                <h3> $ 25,000,000</h3>
                <br />
                <Link to="/quiere">
                  <button className="button1">Ver</button>
                </Link>
              </div>
            </div>

            <div className="Xcolumn">
              <div className="Xcard">
                <img className="Xcasa" src={Background} />
                <h1>3- Casa en venta pedregal</h1>
                <br />
                <h3>320m2 </h3>
                <h3>
                  {" "}
                  5 habitaciones
                  <br />
                </h3>
                <h3>
                  {" "}
                  3 baños
                  <br />
                </h3>
                <h3> $ 25,000,000</h3>
                <br />
                <Link to="/quiere">
                  <button className="button1">Ver</button>
                </Link>
              </div>
            </div>

            <div className="Xcolumn">
              <div className="Xcard">
                <img className="Xcasa" src={Background} />
                <h1>4- Casa en venta pedregal</h1>
                <br />
                <h3>320m2 </h3>
                <h3>
                  {" "}
                  5 habitaciones
                  <br />
                </h3>
                <h3>
                  {" "}
                  3 baños
                  <br />
                </h3>
                <h3> $ 25,000,000</h3>
                <br />
                <Link to="/quiere">
                  <button className="button1">Ver</button>
                </Link>
              </div>
            </div>

            <div className="Xcolumn">
              <div className="Xcard">
                <img className="Xcasa" src={Background} />
                <h1>5- Casa en venta pedregal</h1>
                <br />
                <h3>320m2 </h3>
                <h3>
                  {" "}
                  5 habitaciones
                  <br />
                </h3>
                <h3>
                  {" "}
                  3 baños
                  <br />
                </h3>
                <h3> $ 25,000,000</h3>
                <br />
                <Link to="/quiere">
                  <button className="button1">Ver</button>
                </Link>
              </div>
            </div>

            <div className="Xcolumn">
              <div className="Xcard">
                <img className="Xcasa" src={Background} />
                <h1>6- Casa en venta pedregal</h1>
                <br />
                <h3>320m2 </h3>
                <h3>
                  {" "}
                  5 habitaciones
                  <br />
                </h3>
                <h3>
                  {" "}
                  3 baños
                  <br />
                </h3>
                <h3> $ 25,000,000</h3>
                <br />
                <Link to="/quiere">
                  <button className="button1">Ver</button>
                </Link>
              </div>
            </div>

            <div className="Xcolumn">
              <div className="Xcard">
                <img className="Xcasa" src={Background} />
                <h1>7- Casa en venta pedregal</h1>
                <br />
                <h3>320m2 </h3>
                <h3>
                  {" "}
                  5 habitaciones
                  <br />
                </h3>
                <h3>
                  {" "}
                  3 baños
                  <br />
                </h3>
                <h3> $ 25,000,000</h3>
                <br />
                <Link to="/quiere">
                  <button className="button1">Ver</button>
                </Link>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default List;
