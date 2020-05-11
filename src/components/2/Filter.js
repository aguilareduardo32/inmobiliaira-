import React from 'react';

const FilterBox = (props) => {
    return(
            <div>
            <p>Operación</p>
                <input type='checkbox' defaultChecked name="tipo" value="VENTA" onClick={props.handleChange} onChange={props.handleChange} />
                <label for="VENTA">Venta</label><br></br>
                <input type='checkbox' defaultChecked name="tipo" value="RENTA" onClick= {props.handleChange} onChange={props.handleChange}/>
                <label for="RENTA">Renta</label><br></br>
            </div>
            
    )
}

export default FilterBox