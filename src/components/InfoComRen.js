import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Background from "../images/fondo1.webp";

var sectionStyle = {
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  /* height: "450px", */
  // minHeight: "45vw",
  maxHeight: "450px",
  margin: "0",
  color: "black",
  opacity: 0.9,
};

class InfoForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tipo: "",
      precioMax: "",
      formaDeCompra: "",
      zona: "",
      nombre: "",
      email: "",
      numero: "",
      comentarios: "",
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const tipo = this.state.tipo;
    const precioMax = this.state.precioMax;

    const formaDeCompra = this.state.formaDeCompra;
    const zona = this.state.zona;
    const nombre = this.state.nombre;
    const email = this.state.email;
    const numero = this.state.numero;

    const comentarios = this.state.comentarios;

    axios
      .post("http://localhost:5000/api/infoCompra", {
        tipo,
        precioMax,
        formaDeCompra,
        zona,
        nombre,
        email,
        numero,
        comentarios,
      })
      .then(() => {
        this.props.history.push("/formaEnviada");
      })
      .catch((error) => console.log(error));
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <div className="servicios1" style={sectionStyle}>
          <br />
          <h1 className="s">
            {" "}
            TE AYUDAMOS A ENCONTRAR LA PROPIEDAD QUE ESTÁS BUSCANDO
          </h1>
          <h2 className="y">
            Dinos lo que buscas y nos comunicaremos contigo para ofrecerte las
            mejores opciones.
          </h2>
        </div>
        <div className="formxx">
          <h3>
            Llene esta forma y uno de nuestros ejecutivos se comunicara con
            usted.
          </h3>
          <form className="info-form" onSubmit={this.handleFormSubmit}>
            <div className="column2">
              <label>Delegación o Colonia de interes:</label>
              <input
                className=""
                type="string"
                name="zona"
                value={this.state.zona}
                onChange={(e) => this.handleChange(e)}
              ></input>

              <label>Precio Max:</label>
              <input
                className=""
                type="string"
                name="precioMax"
                value={this.state.precioMax}
                onChange={(e) => this.handleChange(e)}
              ></input>
              <label>Nombre:</label>
              <input
                className=""
                type="string"
                name="nombre"
                value={this.state.nombre}
                onChange={(e) => this.handleChange(e)}
              ></input>

              <label>Telefono:</label>
              <input
                className=""
                type="number"
                name="numero"
                placeholder="NUMERO"
                value={this.state.numero}
                onChange={(e) => this.handleChange(e)}
              ></input>
            </div>
            <div className="column2">
              <label>Tipo:</label>
              <br />
              <select
                id="tipo"
                name="tipo"
                placeholder="Tipo"
                value={this.state.tipo}
                onChange={(e) => this.handleChange(e)}
              >
                <option value="" disabled>
                  Venta/Renta
                </option>
                <option tipo="venta">VENTA</option>
                <option tipo="renta">RENTA</option>
              </select>
              <br />
              <label>Forma de compra:</label>
              <br />
              <select
                id="formaDeCompra"
                name="formaDeCompra"
                value={this.state.formaDeCompra}
                onChange={(e) => this.handleChange(e)}
              >
                <option value="" disabled>
                  contado/credito
                </option>
                <option tipo="credito">credito</option>
                <option tipo="contado">contado</option>
              </select>
              <br />
              <label>Email:</label>
              <input
                className=""
                type="string"
                name="email"
                value={this.state.email}
                onChange={(e) => this.handleChange(e)}
              ></input>

              <label>Comentarios:</label>
              <input
                className=""
                type="string"
                name="comentarios"
                placeholder="COMENTARIOS"
                value={this.state.comentarios}
                onChange={(e) => this.handleChange(e)}
              ></input>
            </div>
            <div className="column3">
              <input className="loginsub" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(InfoForms);
