import React from "react";

const FilterBox = (props) => {
  return (
    <div className="rectangleee">
      <p>Operación</p>
      <input
        type="checkbox"
        defaultChecked
        name="tipo"
        value="VENTA"
        onClick={props.handleChange}
        onChange={props.handleChange}
      />
      <label htmlFor="VENTA">Venta</label>
      <br></br>
      <input
        type="checkbox"
        defaultChecked
        name="tipo"
        value="RENTA"
        onClick={props.handleChange}
        onChange={props.handleChange}
      />
      <label htmlFor="RENTA">Renta</label>
      <br></br>
    </div>
  );
};

export default FilterBox;
