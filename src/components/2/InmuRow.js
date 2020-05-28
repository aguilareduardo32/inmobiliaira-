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
    <div class="pilar">
      <div class="rectangle">
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
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <img src={fotos}></img>
        </Carousel>

        <Link to={`/${id}`}>
          <div className="desc">
            <h1>{titulo}</h1>
            <br />

            <p>{direccion}</p>

            <p>recamaras: {recamaras}</p>

            <h5>${precio}</h5>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default InmuRow;
