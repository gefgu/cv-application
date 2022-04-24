import React, { Component } from "react";

class GeneralData extends Component {
  render() {
    const { name, email, phone } = this.props.data;
    return (
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    );
  }
}

export default GeneralData;
