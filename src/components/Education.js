import React, { Component } from "react";
import "../styles/education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class Education extends Component {
  render() {
    const educationList = this.props.data;
    const { addEducation } = this.props;

    return (
      <div className="education-section">
        <h2>
          Education{" "}
          <button onClick={addEducation}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </h2>
        {educationList.map((educationInfo, index) => {
          const { schoolName, titleOfStudy, startDate, endDate } =
            educationInfo;

          return (
            <div key={index}>
              <h3 className="study-name">{titleOfStudy}</h3>
              <h4 className="school-name">{schoolName}</h4>
              <span className="date">
                {startDate} - {endDate}
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Education;
