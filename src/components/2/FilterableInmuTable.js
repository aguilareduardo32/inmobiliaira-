import React, { Component } from 'react';
import SearchBar from './SearchBar'
import  ImnuTable from './InmuTable'
import Filter from './Filter'



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
           

            
        }
    }

    handleChange = (e) => {
   
        
        
        let { value } = e.target;
      
        
       
        
        this.setState({
            filterText: value
        });
    };

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
            return rentaFilter && ventaFilter && textFilter
        })
        return(
            <div className="Filterable">
                <h1>Inmuebles</h1>
               <SearchBar  handleChange={this.handleChange}/>
               <ImnuTable inmuebles={inmuebles} />
               <Filter  handleChange={this.handleTypeChange} handleDelete={this.handleDelete}/>
            </div>
        )
    }


}

export default FilterableInmuTable;