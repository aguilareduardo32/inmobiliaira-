import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

class InfoForm extends Component {
    constructor(props){
        super(props);
        this.state = { nombre: "", correo: "", telefono: "", lugar: "", tipo: "", valorAproximado: "", comentarios: ""} 
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

        axios.post("http://localhost:5000/api/infoServ",{nombre, correo, telefono, lugar, tipo, valorAproximado, comentarios})
        .then( () => {
            
        })
        .catch( error => console.log(error) )
        
    }
    handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
        
    }

    render() {
        return(
            <div>
                <form class="info-form" onSubmit={this.handleFormSubmit}>
                   <label>Nombre</label>
                   <input class="" type="string" name="nombre" placeholder="NOMBRE" value={this.state.nombre} onChange={ e => this.handleChange(e)}></input>
                   <label>Correo</label>
                   <input class="" type="string" name="correo" placeholder="CORREO" value={this.state.correo} onChange={ e => this.handleChange(e)}></input> 
                   <label>Telefono</label>
                   <input class="" type="number" name="telefono" placeholder="TELEFONO" value={this.state.telefono} onChange={ e => this.handleChange(e)}></input> 
                   <label>Lugar del donde se encuentra inmueble</label>
                   <input class="" type="string" name="lugar" placeholder="LUGAR" value={this.state.lugar} onChange={ e => this.handleChange(e)}></input> 
                   <label>Tipo</label>
                   <input class="" type="string" name="tipo" placeholder="TIPO" value={this.state.tipo} onChange={ e => this.handleChange(e)}></input> 
                   <label>Valor aproximado </label>
                   <input class="" type="string" name="valorAproximado" placeholder="VALORAPROXIMADO" value={this.state.valorAproximado} onChange={ e => this.handleChange(e)}></input> 
                   <label>Comentarios</label>
                   <input class="" type="string" name="comentarios" placeholder="COMENTARIOS" value={this.state.comentarios} onChange={ e => this.handleChange(e)}></input>  
                   <input className="loginsub" type="submit" value="Submit" />                
                </form>
            </div>
        )
    }
}
export default InfoForm
