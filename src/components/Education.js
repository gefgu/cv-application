import React, { Component } from "react";

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
              <h3>{titleOfStudy}</h3>
              <h4>{schoolName}</h4>
              <span>
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
