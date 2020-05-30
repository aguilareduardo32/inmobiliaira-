import React, { Component } from "react";

import service from "../api/sevice";

class AddImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUploading: false,
      titulo: "",
      colonia: "",
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
          <h1>Image upload</h1>
          <h2>New Thing</h2>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <label>Titulo</label>
            <input
              type="text"
              name="titulo"
              value={this.state.titulo}
              onChange={(e) => this.handleChange(e)}
            />
            <label>Colonia</label>
            <input
              type="text"
              name="colonia"
              value={this.state.colonia}
              onChange={(e) => this.handleChange(e)}
            />

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
