import React, { Component } from "react";

class General extends Component {
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

export default General;
