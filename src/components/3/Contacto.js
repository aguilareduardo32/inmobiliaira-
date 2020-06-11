import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Background from "../../images/contactoimg.jpg";

var sectionStyle = {
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  height: "45vw",
  opacity: 0.9,
  margin: "0",
  color: "black",
};

class Contacto extends Component {
  constructor(props) {
    super(props);
    this.state = { nombre: "", telefono: "", email: "", mensaje: "" };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    const nombre = this.state.nombre;
    const telefono = this.state.telefono;
    const email = this.state.email;
    const mensaje = this.state.mensaje;

    axios
      .post("http://localhost:5000/api/contacto", {
        nombre,
        telefono,
        email,
        mensaje,
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
          <h1 className="s">En Inmobiliaria Chigaco nos interesa escucharte</h1>
          <h2 className="y">
            Si le gustaria mas información sobre nosotros o nuestros servicios
            mandanos un mensaje en esta forma y contestaremos en brevedad.{" "}
          </h2>
        </div>
        <div>
          <br />
          <h3>
            Llene esta forma y uno de nuestros ejecutivos se comunicara con
            usted.
          </h3>
          <form className="info-form" onSubmit={this.handleFormSubmit}>
            <div className="column2">
              <label>Nombre:</label>
              <input
                className=""
                type="string"
                name="nombre"
                value={this.state.nombre}
                onChange={(e) => this.handleChange(e)}
              ></input>
              <label>Email:</label>
              <input
                className=""
                type="string"
                name="email"
                value={this.state.email}
                onChange={(e) => this.handleChange(e)}
              ></input>
            </div>
            <div className="column2">
              <label>Telefono:</label>
              <input
                className=""
                type="number"
                name="telefono"
                placeholder="NUMERO"
                value={this.state.telefono}
                onChange={(e) => this.handleChange(e)}
              ></input>

              <label>Mensaje:</label>
              <input
                className=""
                type="string"
                name="mensaje"
                placeholder=""
                value={this.state.mensaje}
                onChange={(e) => this.handleChange(e)}
              ></input>
            </div>
            <div className="column3">
              <input className="yei" type="submit" value="Enviar" />
            </div>
          </form>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}
export default withRouter(Contacto);
