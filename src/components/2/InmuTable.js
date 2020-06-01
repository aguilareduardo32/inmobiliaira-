import React from "react";
import InmuRow from "./InmuRow";

const InmuTable = (props) => {
  const { inmuebles } = props;

  return (
    <div className="inmuebles">
      {inmuebles.map((item) => {
        return (
          <InmuRow
            imageCollection={item.images}
            key={item._id}
            titulo={item.titulo}
            precio={item.precio}
            recamaras={item.recamaras}
            baños={item.baños}
            descripcion={item.descripcion}
            metros={item.metros}
            direccion={item.calle}
            id={item._id}
            image1={item.image1}
            image2={item.image2}
            image3={item.image3}
          />
        );
      })}
    </div>
  );
};

export default InmuTable;
