import React from 'react';
import InmuRow from './InmuRow';


const InmuTable = (props) => {
    const { inmuebles } = props;


    return(
        <div className="inmuebles">
            {inmuebles.map((item) => {
                return <InmuRow key={item._id} titulo={item.titulo}  precio={item.precio} recamaras={item.recamaras} baños={item.baños} descripcion={item.descripcion} metros={item.metros} direccion={item.direccion} id={item._id}  fotos/>
            })}
        </div>
    )
}

export default InmuTable;