import React, { Component } from "react";
import "../styles/work.css";

class Work extends Component {
  render() {
    const workList = this.props.data;

    return (
      <div>
        <h2>Work Experience</h2>
        {workList.map((workInfo) => {
          const {
            companyName,
            positionTitle,
            description,
            startDate,
            endDate,
          } = workInfo;

          return (
            <div>
              <h3 className="position-title">{positionTitle}</h3>
              <h4 className="company-name">{companyName}</h4>
              <span className="date">
                {startDate} - {endDate}
              </span>
              <p className="job-description">{description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Work;
