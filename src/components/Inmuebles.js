import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FilterableInmuTable from "./2/FilterableInmuTable";

class Inmuebles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listPropierties: [],
    };
  }

  getAllPrope = () => {
    axios.get("http://localhost:5000/api/inmuebles").then((responseFromApi) => {
      console.log(responseFromApi.data);
      this.setState({
        listPropierties: responseFromApi.data,
      });
    });
  };

  componentDidMount() {
    this.getAllPrope();
  }

  render() {
    console.log(this.state.listPropierties)
    if (this.state.listPropierties != "") {
      var primercomponent = (
        <FilterableInmuTable inmuebles={this.state.listPropierties} />
      );
    } else {
      var primercomponent = null;
    }
    return <div>{primercomponent}</div>;
  }
}

export default Inmuebles;
