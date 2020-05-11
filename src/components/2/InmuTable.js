import React from 'react';
import InmuRow from './InmuRow';


const InmuTable = (props) => {
    const { inmuebles } = props;


    return(
        <div>
            {inmuebles.map((item) => {
                return <InmuRow key={item._id} titulo={item.titulo} />
            })}
        </div>
    )
}

export default InmuTable;