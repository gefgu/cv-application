import React, { Component } from "react";
import "../styles/general.css";
import { faEnvelope, faContactBook } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class General extends Component {
  render() {
    const { name, email, phone, editing } = this.props.data;
    const { handleEdit, enableEdit } = this.props;

    if (!editing) {
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
          <button
            onClick={() => {
              enableEdit(true);
            }}
          >
            Edit
          </button>
        </div>
      );
    } else if (editing) {
      return (
        <form className="general-data">
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleEdit}
          ></input>
          <div className="contact-info">
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                type="text"
                id="email"
                value={email}
                onChange={handleEdit}
              ></input>
            </div>
            <div>
              <FontAwesomeIcon icon={faContactBook} />
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={handleEdit}
              ></input>
            </div>
          </div>
          <button className="submit" onClick={() => enableEdit(false)}>
            Submit
          </button>
        </form>
      );
    }
  }
}

export default General;
