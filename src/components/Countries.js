import React, { Component } from "react";
import axios from "axios";

const STATUS = {
  LOADING: "LOADING",
  LOADED: "LOADED",
  ERROR: "ERROR",
};

class Countries extends Component {
  state = {
    country: {},
    error: undefined,
    status: STATUS.LOADING,
  };

  componentDidMount() {
    axios
      .get("https://countries.tech-savvy.tech/countries/spain")
      .then((response) => {
        console.log("data", response.data);
        this.setState({
          country: response.data[0],
          status: STATUS.LOADED,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.name,
          status: STATUS.ERROR,
        });
      });
  }

  render() {
    const { status, country, error } = this.state;

    // eslint-disable-next-line default-case
    switch (status) {
      case STATUS.LOADING:
        return <div>Loading</div>;
      case STATUS.LOADED:
        return <div>{country.name.common}</div>;
      case STATUS.ERROR:
        return <div>{error}</div>;
    }
  }
}

export default Countries;
