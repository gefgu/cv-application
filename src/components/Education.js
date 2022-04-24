import React, { Component } from "react";
import "../styles/education.css"

class Education extends Component {
  render() {
    const educationList = this.props.data;

    return (
      <div>
        <h2>Education</h2>
        {educationList.map((educationInfo) => {
          const { schoolName, titleOfStudy, startDate, endDate } =
            educationInfo;

          return (
            <div>
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
