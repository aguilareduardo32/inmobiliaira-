import React from 'react';
import InmuRow from './InmuRow';


const InmuTable = (props) => {
    const { inmuebles } = props;


    return(
        <div>
            {inmuebles.map((item) => {
                return <InmuRow titulo={item.titulo} />
            })}
        </div>
    )
}

export default InmuTable;