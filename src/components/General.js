import React, { Component } from "react";
import "../styles/general.css";

class General extends Component {
  render() {
    const { name, email, phone } = this.props.data;
    return (
      <div className="general-data">
        <h1>{name}</h1>
        <div className="contact-info">
          <p>{email}</p>
          <p>{phone}</p>
        </div>
      </div>
    );
  }
}

export default General;
