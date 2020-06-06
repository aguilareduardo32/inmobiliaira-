import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Link } from "react-router-dom";

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
const InmuRow = (props) => {
  console.log(props);
  const {
    titulo,
    recamaras,
    baños,
    descripcion,
    metros,
    direccion,
    precio,
    vendedor,
    telefono,
    image1,
    image2,
    image3,
    fotos,
    id,
    imageCollection,
    

  } = props;

  /* const images = [
    {
      original: image1,
    },
    {
      original: image2,
    },
    {
      original: image3,
    },
  ]; */
  console.log(imageCollection.length);

  let imagesC = imageCollection.map((item) => {
    return { original: item, thumbnail: item };
  });

  return (
    <div className="pilar">
      <div className="rectangle">
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
          <img className="imager" src={fotos}></img>
        </Carousel>

        <div className="desc">
          <h1>{titulo}</h1>

          <p>📍{direccion}</p>

          <p>recamaras: {recamaras}</p>
          <p>construidos: {metros}m2</p>

          <h5>${precio}</h5>

          {/* <Link to={`/${id}`}>   <input className="e"  type="submit" value="Ver mas" /></Link>  */}

          <Link
            className="e"
            title={imagesC.length}
            to={{
              pathname: `inmueble/${id}`,
              props,
            }}
          >
            <input className="e" type="submit" value="Ver mas" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default InmuRow;
