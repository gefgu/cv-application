import React, { Component } from "react";

class WorkData extends Component {
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
              <h3>{positionTitle}</h3>
              <h4>{companyName}</h4>
              <span>{startDate} - {endDate}</span>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default WorkData;
