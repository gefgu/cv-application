import React, { Component } from "react";
import "../styles/general.css";
import { faEnvelope, faContactBook } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class General extends Component {
  render() {
    const { name, email, phone } = this.props.data;
    return (
      <div className="general-data">
        <h1>{name}</h1>
        <div className="contact-info">
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            {email}
          </p>
          <p>
            <FontAwesomeIcon icon={faContactBook} /> {phone}
          </p>
        </div>
      </div>
    );
  }
}

export default General;
