import React, { Component, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Link, Route, Redirect } from "react-router-dom";

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
    };
    console.log(this.state.inmueble);
  }

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
      <div className="pilar">
        <div className="rectangle">
          {this.state.inmueble.imageCollection &&
          this.state.inmueble.imageCollection.length > 0 ? (
            <p> {this.state.inmueble.imageCollection.length}</p>
          ) : (
            <div>0</div>
          )}

          <div className="imager-gallery-wrapper">
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
            <img className="imager"></img>
          </Carousel>

          <div className="desc">
            <h1>{this.state.inmueble.titulo}</h1>

            <p>📍{this.state.inmueble.direccion}</p>

            <p>recamaras: {this.state.inmueble.recamaras}</p>
            <p>construidos: {this.state.inmueble.metros}m2</p>

            <h5>${this.state.inmueble.precio}</h5>

            <Link to={`/${this.state.inmueble.id}`}>
              {" "}
              <input className="e" type="submit" value="Ver mas" />
            </Link>
          </div>
        </div>
        <img className="imager" src={this.state.inmueble.image1}></img>
      </div>
    );
  }
}
export default InmuDe;
