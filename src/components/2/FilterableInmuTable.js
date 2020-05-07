import React, { Component } from 'react';
import SearchBar from './SearchBar'
import  ImnuTable from './InmuTable'
import InmuRow from './InmuRow';



class FilterableInmuTable extends Component {
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            inmuebles: props.inmuebles,
            oldInmuebles : props.inmuebles
        }
    }

    handleChange = (e) => {
        let { value } = e.target;
        let newInmuebles = this.state.inmuebles.filter((item) => {
            return item.delegacion.toLowerCase().includes(value.toLowerCase()) || item.colonia.toLowerCase().includes(value.toLowerCase());
        });
        
        this.setState({
            inmuebles: newInmuebles
        });
    };

    handleDelete = (e) => {
        let { key } = e;
        if( key === "Backspace" || key === "Delete" ) {
            this.setState({
                inmuebles: this.state.oldInmuebles
              });
        }
    };


    render() {
        return(
            <div className="Filterable">
                <h1>Inmuebles</h1>
               <SearchBar  handleChange={this.handleChange} handleDelete={this.handleDelete}/>
               <ImnuTable inmuebles={this.state.inmuebles} />
            </div>
        )
    }


}

export default FilterableInmuTable;