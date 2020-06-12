import React, { Component } from "react";
import { Link } from "react-router-dom";
import Background from "../../images/eiii.jpg";
import axios from "axios";
import { withRouter } from "react-router-dom";

var sectionStyle = {
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  // height: "45vw",
  maxHeight: "450px",
  opacity: 0.9,
  margin: "0",
  color: "black",
};

class InfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      correo: "",
      telefono: "",
      lugar: "",
      tipo: "",
      valorAproximado: "",
      comentarios: "",
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const nombre = this.state.nombre;
    const correo = this.state.correo;
    const telefono = this.state.telefono;
    const lugar = this.state.lugar;
    const tipo = this.state.tipo;
    const valorAproximado = this.state.valorAproximado;
    const comentarios = this.state.comentarios;

    axios
      .post("http://localhost:5000/api/in/infoServ", {
        nombre,
        correo,
        telefono,
        lugar,
        tipo,
        valorAproximado,
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
      <div className="">
        <div className="row">
          <div className="col-12">
            <div className="servicios1" style={sectionStyle}>
              <br />
              <h1 className="s">Tengo una propiedad</h1>
              <h2 className="y">
                {" "}
                La venta o alquiler de su propiedad implica mucho más que un
                aviso en su ventana o una publicación en Internet.
                <br />
                <br />
                Nuestro servicio le proporciona total asesoramiento en cada una
                de las etapas de su operación inmobiliaria.
              </h2>
            </div>
          </div>
          <div className="col-12">
            <div className="texxto">
              <br />
              <br />
              <h1>AL OFRECER SU PROPIEDAD</h1>
              <br />
              <br />
              <p>
                1. Verificamos que toda la documentación de su inmueble esté en
                orden y que no haya trámites que completar para evitar
                contratiempos en la venta o alquiler.
                <br />
                <br />
                2. Asesoría de los trámites y costos fiscales derivados de su
                operación de venta o alquiler.
                <br />
                <br />
                3.Realizamos un Análisis de Mercado Comparativo basado en la
                oferta actual y la demanda histórica de inmuebles en su zona,
                para determinar con toda precisión el precio óptimo de venta o
                alquiler de su propiedad.
                <br />
                <br />
                4. Estableceremos un plan específico de mercadeo para la venta o
                alquiler de su propiedad.
                <br />
                <br />
                El apoyo del reconocimiento y liderazgo de nuestra marca; la
                difusión de la información de su propiedad en la Red de CENTURY
                21; el contar con una cartera de prospectos calificados; nuestra
                política de compartir de forma equitativa con el universo de
                Agentes Inmobiliarios de México; le garantiza la venta o
                alquiler de su propiedad en el mejor precio y menor tiempo.
                <br />
                Pero no nos quedamos ahí, adicionalmente contará con:
                <br />
                -Promoción en nuestra página web
                <br />
                -Publicación en los portales inmobiliarios más reconocidos
                <br />
                -Anuncios en periódicos o medios impresos locales.
                <br />
                -Colocación del reconocido cartel de Inmobiliaria Chicago
                <br />
                -Cartas y folletos dirigidos a sectores específicos.
                <br />
                -Nuestro compromiso es prestar un servicio eficaz que permita
                ofrecer soluciones inmobiliarias de calidad, garantizando
                clientes de por vida.
                <br />
                <br />
                5.Ofrecemos la asesoría necesaria que le permitirá hacer las
                mejoras a su propiedad para lograr un impacto positivo en los
                clientes que la visiten.
                <br />
                <br />
                6.Nuestros Agentes cuentan con el profesionalismo para brindar a
                los clientes la información profesional y una demostración
                adecuada de su propiedad.
                <br />
                <br />
                7.Evaluamos a los prospectos para evitarle molestias
                innecesarias, además por su seguridad siempre acompañamos a todo
                prospecto que visite su propiedad.
                <br />
                <br />
                8.Obtendremos del cliente interesado en su propiedad la mejor
                propuesta de compra o alquiler por escrito.
                <br />
                <br />
                9.Una vez que la propuesta de compra y/o alquiler sea aceptada y
                negociados todos los detalles de la operación, lo asesoraremos
                con todos los pasos y documentos a fin de perfeccionar su
                operación de Compra Venta o Alquiler.
              </p>
              <br />
              <br />
            </div>
          </div>
          <div className="col-12" style={{ padding: "0" }}>
            <div className="formxx">
              <h3>
                Llene esta forma y uno de nuestros ejecutivos se comunicara con
                usted.
              </h3>
              <br />
              <br />
              <form className="info-form1" onSubmit={this.handleFormSubmit}>
                <div className="column2">
                  <label>Nombre:</label>
                  <input
                    className=""
                    type="string"
                    name="nombre"
                    value={this.state.nombre}
                    onChange={(e) => this.handleChange(e)}
                  ></input>
                  <label>Correo:</label>
                  <input
                    className=""
                    type="string"
                    name="correo"
                    value={this.state.correo}
                    onChange={(e) => this.handleChange(e)}
                  ></input>
                  <label>Numero Cel:</label>
                  <input
                    className=""
                    type="string"
                    name="telefono"
                    value={this.state.telefono}
                    onChange={(e) => this.handleChange(e)}
                  ></input>
                </div>
                <div className="column2">
                  <label>Lugar del inmueble:</label>
                  <input
                    className=""
                    type="string"
                    name="lugar"
                    value={this.state.lugar}
                    onChange={(e) => this.handleChange(e)}
                  ></input>
                  <label>Tipo de inmueble:</label>
                  <input
                    className=""
                    type="string"
                    name="tipo"
                    value={this.state.tipo}
                    onChange={(e) => this.handleChange(e)}
                  ></input>
                  <label>Valor aproximado:</label>
                  <input
                    className=""
                    type="string"
                    name="valorAproximado"
                    value={this.state.valorAproximado}
                    onChange={(e) => this.handleChange(e)}
                  ></input>
                </div>
                <div className="column3">
                  <label>Comentarios:</label>
                  <br />
                  <input
                    size="50 "
                    type="string"
                    name="comentarios"
                    placeholder="COMENTARIOS"
                    value={this.state.comentarios}
                    onChange={(e) => this.handleChange(e)}
                  ></input>{" "}
                  <br />
                  <input className="yei" type="submit" value="Enviar" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(InfoForm);
