import React from "react";

const SearchBar = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <label>Delegación o Colonía</label>
          <br />
          <input
            type="text"
            className="input search-bar"
            name="search"
            onChange={props.handleChange}
            onKeyDown={props.handleDelete}
          />
        </div>
        <div className="col-12">
          <label>precio minimo</label>
          <br />
          <input
            type="number"
            name="minfilter"
            onChange={props.handleChangeMin}
            onKeyDown={props.handleDelete}
          />
        </div>
        <div className="col-12">
          <label>precio max</label>
          <br />
          <input
            type="number"
            name="maxfilter"
            onChange={props.handleChangeMax}
            onKeyDown={props.handleDelete}
          />
        </div>
        <div className="col-12">
          <p>habitaciones</p>
          <select id="cars" onChange={props.handleChangeRoom}>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
