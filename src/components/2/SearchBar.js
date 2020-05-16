import React  from   'react';

const SearchBar = (props) => {
return(
    <div>
    <p>Delegación o Colonía</p>
        <input 
        type='text'
        className="input search-bar"
        name="search"
      
        onChange={props.handleChange}
        onKeyDown={props.handleDelete}
        />
        <br/>
        <br/>
         <p>precio minimo</p>
             <input type="number" name="minfilter" onChange={props.handleChangeMin} onKeyDown={props.handleDelete}/>
        <br/>
        <br/>
        <p>precio max</p>  
        <input type="number" name="maxfilter" onChange={props.handleChangeMax} onKeyDown={props.handleDelete}/>
        <br/>
        <br/>
        <p>habitaciones</p>
        <select id="cars" onChange={props.handleChangeRoom}>
        
            <option value="1" >1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
        </select>
    </div>
)
}

export default SearchBar