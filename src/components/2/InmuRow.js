import React from 'react';

const InmuRow = (props) => {
    const { titulo, tipo, recamaras, metros, direccion, precio, fotos} = props;

    return (
        <div>
            
                     
            <div class="column">
                <div class="card">
                <img className="casa" src={props.fotos}/>
                <h1>{titulo}</h1>
                

               
                </div>
            </div>

                
        </div>
    )
}
export default InmuRow;