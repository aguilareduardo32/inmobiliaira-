import React, { Component } from 'react';
import SearchBar from './SearchBar'
import  ImnuTable from './InmuTable'
import Filter from './Filter'

import FilterMin from './FilterMin';



class FilterableInmuTable extends Component {
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            inmuebles: props.inmuebles,
            oldInmuebles : props.inmuebles,
            filterText: "",
            showRenta: true,
            showVenta: true,
            filterMin: 0,
            filterMax: 0,
            filterRooms: 0,
            
        }
    }

    handleChange = (e) => {
   
        
        
        let { value } = e.target;
      
        
       
        
        this.setState({
            filterText: value
        });
    };

    handleRoomsChange = (e) => {

        let { value } = e.target;
        this.setState({
            filterRooms: value
        }) 
    }
    handleMinChange = (e) => {

        let { value } = e.target;
        this.setState({
            filterMin: value
        })

    }
    handleMaxChange = (e) => {
        let { value } = e.target;
        this.setState({
            filterMax: value
        })
    }

    handleTypeChange = (e) => {

        let { value } = e.target;
        if( value === "RENTA" ) {
            this.setState({
                showRenta: !this.state.showRenta
            })
        }
        if( value === "VENTA" ) {
            this.setState({
                showVenta: !this.state.showVenta
            })
        }
    }

    
    handleDelete = (e) => {
        let { key } = e;
        let { value } = e.target;
        if( key === "Backspace" || key === "Delete"   ) {
            this.setState({
                inmuebles: this.state.oldInmuebles
              });
        }
    };


    render() {
        let inmuebles = this.props.inmuebles.filter((item) => { 
            let rentaFilter = true;
            if(!this.state.showRenta ) {
                rentaFilter = item.tipo != "RENTA"                               
            }
            let ventaFilter = true;
            if(!this.state.showVenta ) {
                ventaFilter = item.tipo != "VENTA"                               
            }
            let textFilter = true;
            if (this.state.filterText) {
                textFilter = item.delegacion.toLowerCase().includes(this.state.filterText.toLowerCase()) || item.colonia.toLowerCase().includes(this.state.filterText.toLowerCase())
            }
            let minPriceFilter = true;
            if (this.state.filterMin > 0) {
                minPriceFilter = item.precio > this.state.filterMin
            }
            let maxPriceFilter = true;
            if (this.state.filterMax > 0) {
                maxPriceFilter = item.precio < this.state.filterMax
            }
            let roomFilter = true;
            if(this.state.filterRooms) {
                roomFilter = item.recamaras >= this.state.filterRooms
            }
            return rentaFilter && ventaFilter && textFilter && minPriceFilter && maxPriceFilter && roomFilter
        })
        return(
            <div>

                <div className="filtros">
                        <SearchBar  handleChange={this.handleChange} handleChangeMin={this.handleMinChange} handleChangeMax={this.handleMaxChange} handleChangeRoom={this.handleRoomsChange}/>
                        <Filter  handleChange={this.handleTypeChange  } handleDelete={this.handleDelete}/> 
                </div>
               
                <ImnuTable className="inmuebles" inmuebles={inmuebles} />
            
                      
            </div>
        )
    }


}

export default FilterableInmuTable;