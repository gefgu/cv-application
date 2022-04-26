import React, { Component } from "react";
import "../styles/work.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

class Work extends Component {
  render() {
    const workList = this.props.data;

    return (
      <div className="work-section">
        <h2>Work Experience</h2>
        {workList.map((workInfo, index) => {
          const {
            companyName,
            positionTitle,
            description,
            startDate,
            endDate,
            editing,
          } = workInfo;
          const { handleListEdit, enableListEdit, deleteListElement } =
            this.props;

          if (!editing) {
            return (
              <div key={index}>
                <h3 className="position-title">
                  {positionTitle}{" "}
                  <button onClick={() => enableListEdit("work", index, true)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                </h3>
                <h4 className="company-name">{companyName}</h4>
                <span className="date">
                  {startDate} - {endDate}
                </span>
                <p className="job-description">{description}</p>
              </div>
            );
          }

          return (
            <form key={index}>
              <input
                className="position-title"
                placeholder="Position Title"
                value={positionTitle}
                data-index={index}
                onChange={(e) => handleListEdit(e, "work")}
                name="positionTitle"
              ></input>
              <input
                className="company-name"
                placeholder="Company Name"
                value={companyName}
                data-index={index}
                onChange={(e) => handleListEdit(e, "work")}
                name="companyName"
              ></input>
              <span className="date">
                <input
                  placeholder="Start Date"
                  value={startDate}
                  data-index={index}
                  onChange={(e) => handleListEdit(e, "work")}
                  name="startDate"
                ></input>
                -
                <input
                  placeholder="End Date"
                  value={endDate}
                  data-index={index}
                  onChange={(e) => handleListEdit(e, "work")}
                  name="endDate"
                ></input>
              </span>
              <input
                className="job-description"
                placeholder="Job description..."
                value={description}
                data-index={index}
                onChange={(e) => handleListEdit(e, "work")}
                name="description"
                type="textarea"
              ></input>
              <div className="form-buttons">
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    enableListEdit("work", index, false);
                  }}
                >
                  Submit
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    deleteListElement("work", index);
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </form>
          );
        })}
      </div>
    );
  }
}

export default Work;
