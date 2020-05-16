import React from 'react';

const FilterMin = (props) => {
    return(
            <div>
            <p>precio minimo</p>
             <input type="number" name="minfilter" onChange={props.handleChange} onKeyDown={props.handleDelete}/>
            </div>
            
    )
}

export default FilterMin