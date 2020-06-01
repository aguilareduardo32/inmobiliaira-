import React, { Component } from "react";

import service from "../api/sevice";

class AddImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUploading: false,
      titulo: "",
      colonia: "",
      tipo: "",
      recamaras: "",
       descripcion: "",
      metros: "",
    
      calle: "",
      precio: "",
      delegacion: "",
      baños: "",
      telefono: "",
       vendedor: "",
      images: [],
      image1: "",
      image2: "",
      image3: "",
      uploadImageData: new FormData(),
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleFileUpload1 = (e) => {
    console.log("The file to be uploades id", e.target.files[0]);
    //return;
    const uploadData = new FormData();
    uploadData.append("image1", e.target.files[0]);
    service
      .handleUpload1(uploadData)
      .then((response) => {
        this.setState({ image1: response.secure_url });
      })
      .catch((err) => {
        console.log("error while uploading the file: ", err);
      });
  };


  handleFileUpload = (e) => {
    console.log("The file to be uploaded id", e.target.files);
    //return;
    const uploadData = new FormData();
    let imageFiles = e.target.files;
    for (let i = 0; i < imageFiles.length; i++) {
      uploadData.append("image", imageFiles[i]);
    }

    this.setState({
      images: [...this.state.images, ...e.target.files],
      //   isUploading: true,
      uploadImageData: [...uploadData],
    });
    console.log(">>>>>1", uploadData);
    console.log(">>>>>2", this.state.uploadImageData);
    // return;
    service
      .handleUpload(uploadData)
      .then((response) => {
        console.log("Upload response = ", response);
        this.setState({
          images: response.data,
          isUploading: false,
        });
      })
      .catch((err) => {
        this.setState({
          isUploading: false,
        });
        console.log("error while uploading the file: ", err);
      });
  };


  handleSubmit = (e) => {
    e.preventDefault();
    /* console.log(this.state);
    service
      .handleUpload(this.state.uploadImageData)
      .then((response) => {
        console.log("Upload response = ", response);
        this.setState({
          images: response.data,
          isUploading: false,
        });

        
      })
      .catch((err) => {
        this.setState({
          isUploading: false,
        });
        console.log("error while uploading the file: ", err);
      }); */

    service
      .saveNewThing(this.state)
      .then((res) => {
        console.log("added:", res);
      })
      .catch((err) => {
        console.log("error while adding the thing: ", err);
      });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Agregar inmueble</h1>
    
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <label>Titulo</label>
            <input
              type="text"
              name="titulo"
              value={this.state.titulo}
              onChange={(e) => this.handleChange(e)}
            />
            <br/>
            <label>Venta/Renta</label>
            <input
              type="text"
              name="tipo"
              value={this.state.tipo}
              onChange={(e) => this.handleChange(e)}
            />
            <br/>
            <label>recamaras</label>
            <input
              type="number"
              name="recamaras"
              value={this.state.recamaras}
              onChange={(e) => this.handleChange(e)}
            />
            <br/>
            <label>descripcion</label>
            <textarea
              type="comment"
              name="descripcion"
              value={this.state.descripcion}
              onChange={(e) => this.handleChange(e)}
            />
            <br/>
            <label>metros</label>
            <input
              type="number"
              name="metros"
              value={this.state.metros}
              onChange={(e) => this.handleChange(e)}
            />
            <label>calle</label>
            <input
              type="text"
              name="calle"
              value={this.state.calle}
              onChange={(e) => this.handleChange(e)}
            />
            <br/>
            <label>precio</label>
            <input
              type="number"
              name="precio"
              value={this.state.precio}
              onChange={(e) => this.handleChange(e)}
            />
            <label>delegacion</label>
            <input
              type="text"
              name="delegacion"
              value={this.state.delegacion}
              onChange={(e) => this.handleChange(e)}
            />
            <label>baños</label>
            <input
              type="text"
              name="baños"
              value={this.state.baños}
              onChange={(e) => this.handleChange(e)}
            />
            <label>telefono</label>
            <input
              type="number"
              name="telefono"
              value={this.state.telefono}
              onChange={(e) => this.handleChange(e)}
            />
            <br/>
            <label>vendedor</label>
            <input
              type="text"
              name="vendedor"
              value={this.state.vendedor}
              onChange={(e) => this.handleChange(e)}
            />
           
           <br/>

            <label>Colonia</label>
            <input
              type="text"
              name="colonia"
              value={this.state.colonia}
              onChange={(e) => this.handleChange(e)}
            />
            <br/>
              <label>Imagen mapa</label>
            <input type="file" name="image1" onChange={(e) => this.handleFileUpload1(e)} />
            <br/>
            <label>Imagenes</label>
            <input
              type="file"
              name="image"
              multiple
              onChange={(e) => this.handleFileUpload(e)}
            />
            {/* <input type="file" onChange={(e) => this.handleFileUpload(e)} />
            <input type="file" onChange={(e) => this.handleFileUpload(e)} /> */}
            <button type="submit" disabled={this.state.isUploading}>
              Save new thing
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddImages;
