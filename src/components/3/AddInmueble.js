import React, { Component } from 'react';

import service from '../../api/sevice';

class AddInmueble extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            titulo: "",
            tipo: "",
            dueño: "",
            recamaras: "",
            descripcion: "",
            metros: "",
            colonia: "",
            calle: "",
            precio: "",
            delegacion: "",
            baños: "",
            telefono: "",
            image: [],
        };
    }

    handleChange = e => { 
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleFileUpload = e => {
        console.log("The file to be uploades id", e.target.files)

        const uploadData  = new FormData();

        uploadData.append("image", e.target.files)

        service.handleUpload(uploadData)
        .then(response => {

            this.setState({ image: response.secure_url }) ;
        })
        .catch(err => {
            console.log("error while uploading the file: ", err);
        })

    }

    handleSubmit = e => {
        e.preventDefault();

        service.saveNewThing(this.state)
        .then(res => {
            console.log('added:', res);
        })
        .catch(err => {
            console.log("error while adding the thing: ", err)
        })
    }

    render() {
        return (
            <div>
            <div>
            <h1>kadksmkxsm</h1>
            <h2>New Thing</h2>
            <form onSubmit={e => this.handleSubmit(e)}>
            <label>titulo</label>
                <input 
                    type="text" 
                    name="name" 
                    value={ this.state.titulo } 
                    onChange={ e => this.handleChange(e)} />
                
               
                <input 
                    type="file" 
                    onChange={(e) => this.handleFileUpload(e)} /> 
                <button type="submit">Save new thing</button>
            </form>
          </div>
          </div>
        )
    }
}

export default AddInmueble;


