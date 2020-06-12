import React, { Component, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Link, Route, Redirect } from "react-router-dom";
import Axios from "axios";
import "./InmuDe.css";

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
    super(props);
    this.state = {
      inmueble: this.props.location.props,
      email: "",
      nombre: "",
      telefono: "",
      mensaje: "",
    };
    console.log(this.state.inmueble);
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const nombre = this.state.nombre;
    const telefono = this.state.telefono;
    const mensaje = this.state.mensaje;
    const { params } = this.props.match;

    Axios.post(`http://localhost:5000/api/in/${params.id}`, {
      email,
      nombre,
      telefono,
      mensaje,
    })
      .then(() => {
        this.props.history.push("/infoesp");
      })
      .catch((error) => console.log(error));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    if (!this.state.inmueble) {
      return <Route render={() => <Redirect to="/inmuebles" />}></Route>;
    }
    // var imagesC = [];
    // imagesC = this.state.inmueble.imageCollection;
    // console.log(imagesC);
    let imagesC = this.state.inmueble.imageCollection.map((item) => {
      return { original: item, thumbnail: item };
    });

    return (
      <div>
        <div className="Xcontainer" style={{ margin: "-50px 5%" }}>
          <div className="row" style={{ width: "100%" }}>
            <div
              className="col-sm-12 col-xs-12 col-md-8 col-lg-8 col-xl-8"
              style={{ padding: "0px", margin: "0px" }}
            >
              <div className="pilar2">
                <div className="Ximager-gallery">
                  <ImageGallery
                    items={imagesC}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    showThumbnails={false}
                    showIndex={true}
                  />
                </div>

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
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  dotListclassName="custom-dot-list-style"
                  itemclassName="carousel-item-padding-40-px"
                >
                  <img className="imagers"></img>
                </Carousel>
              </div>
            </div>
            <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4 col-xl-4">
              <div className="formEsp ">
                <br />
                <br />

                <h3>mensaje al anunciante</h3>
                <br />

                <form className="inmu-esp" onSubmit={this.handleFormSubmit}>
                  <label>Email</label>
                  <br />
                  <input
                    type="string"
                    name="email"
                    value={this.state.email}
                    onChange={(e) => this.handleChange(e)}
                  ></input>
                  <br />
                  <label>Nombre</label>
                  <br />
                  <input
                    type="string"
                    name="nombre"
                    value={this.state.nombre}
                    onChange={(e) => this.handleChange(e)}
                  ></input>
                  <br />
                  <label>Telefono</label>
                  <br />
                  <input
                    type="string"
                    name="telefono"
                    value={this.state.telefono}
                    onChange={(e) => this.handleChange(e)}
                  ></input>
                  <br />
                  <label>Mensaje</label>
                  <br />
                  <input
                    className="iii"
                    size="25"
                    type="string"
                    name="mensaje"
                    value={this.state.mensaje}
                    onChange={(e) => this.handleChange(e)}
                  ></input>
                  <br />
                  <br />
                  <input className="yei ooo" type="submit" value="Enviar" />
                </form>
                <br />
                <p>vendedor: {this.state.inmueble.vendedor}</p>
                <p>telefono: {this.state.inmueble.telefono}</p>
              </div>
            </div>
          </div>
          <div className="row" style={{ width: "100%" }}>
            <div className="col-12">
              <div className="descc">
                <h1>{this.state.inmueble.titulo}</h1>

                <p>📍{this.state.inmueble.direccion}</p>

                <p>recamaras: {this.state.inmueble.recamaras}</p>
                <p>construidos: {this.state.inmueble.metros}m2</p>
                <p>{this.state.inmueble.descripcion}</p>

                <h5>${this.state.inmueble.precio}</h5>
              </div>
            </div>
            <div className="col-12">
              <img className="imager" src={this.state.inmueble.image1}></img>
            </div>
            <div className="col-12">
              <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4 col-xl-2">
                <div className="formEsp2 ">
                  

                  <h3>mensaje al anunciante</h3>
                  <br />

                  <form className="inmu-esp" onSubmit={this.handleFormSubmit}>
                    <label>Email</label>
                    <br />
                    <input
                      type="string"
                      name="email"
                      value={this.state.email}
                      onChange={(e) => this.handleChange(e)}
                    ></input>
                    <br />
                    <label>Nombre</label>
                    <br />
                    <input
                      type="string"
                      name="nombre"
                      value={this.state.nombre}
                      onChange={(e) => this.handleChange(e)}
                    ></input>
                    <br />
                    <label>Telefono</label>
                    <br />
                    <input
                      type="number"
                      name="telefono"
                      value={this.state.telefono}
                      onChange={(e) => this.handleChange(e)}
                    ></input>
                    <br />
                    <label>Mensaje</label>
                    <br />
                    <input
                      className="iii"
                      size="25"
                      type="string"
                      name="mensaje"
                      value={this.state.mensaje}
                      onChange={(e) => this.handleChange(e)}
                    ></input>
                    <br />
                    <br />
                    <input className="yei ooo" type="submit" value="Enviar" />
                  </form>
                  <br />
                  <p>vendedor: {this.state.inmueble.vendedor}</p>
                  <p>telefono: {this.state.inmueble.telefono}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default InmuDe;
