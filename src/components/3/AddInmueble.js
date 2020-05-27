import React, { Component } from 'react';

import service from '../../api/sevice';

class AddInmueble extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            titulo: "",
          
            colonia: "",
          
            image1: "",
            image2: "",
            image3: ""
        };
    }

    handleChange = e => { 
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleFileUpload1 = e => {
        console.log("The file to be uploades id", e.target.files[0])

        const uploadData  = new FormData();

        uploadData.append("image1", e.target.files[0])
      

        service.handleUpload(uploadData)
        .then(response => {

            this.setState({ image1: response.secure_url   }) ;
        })
        .catch(err => {
            console.log("error while uploading the file: ", err);
        })

    }
    handleFileUpload2 = e => {
        console.log("The file to be uploades id", e.target.files[0])

        const uploadData  = new FormData();

        uploadData.append("image2", e.target.files[0])
      

        service.handleUpload2(uploadData)
        .then(response => {

            this.setState({ image2: response.secure_url   }) ;
        })
        .catch(err => {
            console.log("error while uploading the file: ", err);
        })

    }
    handleFileUpload3 = e => {
        console.log("The file to be uploades id", e.target.files[0])

        const uploadData  = new FormData();

        uploadData.append("image3", e.target.files[0])
      

        service.handleUpload3(uploadData)
        .then(response => {

            this.setState({ image3: response.secure_url   }) ;
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
                    name="titulo" 
                    value={ this.state.titulo } 
                    onChange={ e => this.handleChange(e)} />

                <input 
                    type="text" 
                    name="colonia" 
                    value={ this.state.colonia } 
                    onChange={ e => this.handleChange(e)} />
                
               
                <input 
                    type="file" 
                    onChange={(e) => this.handleFileUpload1(e)} /> 
                 <input 
                    type="file" 
                    onChange={(e) => this.handleFileUpload2(e)} /> 
                <input 
                    type="file" 
                    onChange={(e) => this.handleFileUpload3(e)} /> 
                <button type="submit">Save new thing</button>
            </form>
          </div>
          </div>
        )
    }
}

export default AddInmueble;


