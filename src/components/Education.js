import React, { Component } from "react";
import "../styles/education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

class Education extends Component {
  render() {
    const educationList = this.props.data;
    const {
      addEducation,
      handleEducationEdit,
      enableEducationEdit,
      deleteEducationElement,
    } = this.props;

    return (
      <div className="education-section">
        <h2>
          Education{" "}
          <button onClick={addEducation}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </h2>
        {educationList.map((educationInfo, index) => {
          const { schoolName, titleOfStudy, startDate, endDate, editing } =
            educationInfo;

          if (!editing) {
            return (
              <div key={index}>
                <h3 className="study-name">
                  {titleOfStudy}{" "}
                  <button onClick={() => enableEducationEdit(index, true)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                </h3>
                <h4 className="school-name">{schoolName}</h4>
                <span className="date">
                  {startDate} - {endDate}
                </span>
              </div>
            );
          }

          return (
            <form className="education-element" key={index}>
              <input
                className="study-name"
                placeholder="Title of Study"
                value={titleOfStudy}
                data-index={index}
                onChange={handleEducationEdit}
                name="titleOfStudy"
              ></input>
              <div>
                <input
                  className="school-name"
                  placeholder="School Name"
                  value={schoolName}
                  data-index={index}
                  onChange={handleEducationEdit}
                  name="schoolName"
                ></input>
                <span className="date">
                  <input
                    placeholder="Start Date"
                    value={startDate}
                    data-index={index}
                    onChange={handleEducationEdit}
                    name="startDate"
                  ></input>{" "}
                  -{" "}
                  <input
                    placeholder="End Date"
                    value={endDate}
                    data-index={index}
                    onChange={handleEducationEdit}
                    name="endDate"
                  ></input>
                </span>
              </div>
              <div className="form-buttons">
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    enableEducationEdit(index, false);
                  }}
                >
                  Submit
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(index);
                    deleteEducationElement(index);
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

export default Education;
