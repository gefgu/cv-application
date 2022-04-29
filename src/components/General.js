import React from "react";
import "../styles/general.css";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function General(props) {
  const { name, email, phone, editing } = props.data;
  const { handleEdit, enableEdit } = props;

  

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
            <FontAwesomeIcon icon={faPhone} /> {phone}
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
        <input type="text" id="name" value={name} onChange={handleEdit}></input>
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
            <FontAwesomeIcon icon={faPhone} />
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

export default General;
