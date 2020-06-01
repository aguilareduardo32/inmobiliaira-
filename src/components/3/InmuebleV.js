import React from "react";
import InmuebleDe from './InmuDe'


const InmuebleV = (props) => {
  const { inmuebleee } = props;
    console.log(inmuebleee)

  
    
  return (
    <div className="inmuebles">
 
          <InmuebleDe
            imagesCollection={inmuebleee.images}
            key={inmuebleee._id}
            titulo={inmuebleee.titulo}
            precio={inmuebleee.precio}
            recamaras={inmuebleee.recamaras}
            baños={inmuebleee.baños}
            descripcion={inmuebleee.descripcion}
            metros={inmuebleee.metros}
            direccion={inmuebleee.calle}
            id={inmuebleee._id}
            image1={inmuebleee.image1}
            image2={inmuebleee.image2}
            image3={inmuebleee.image3}
          />
        
    </div>
  );
};

export default InmuebleV;