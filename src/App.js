import React, { Component } from "react";
import GeneralData from "./components/GeneralData";
import WorkData from "./components/WorkData";
import EducationalData from "./components/EducationalData";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        general: {
          name: "Gustavo Bruno",
          email: "gefgu12@gmail.com",
          phone: "+55 (99) 99999-9999",
        },
        educational: [
          {
            schoolName: "Harvard Business School",
            titleOfStudy: "Business Making",
            startDate: "2016",
            endDate: "2020",
          },
        ],
        work: [
          {
            companyName: "Facebook",
            positionTitle: "Senior Web Developer",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            startDate: "2021",
            endDate: "2022",
          },
          {
            companyName: "Google",
            positionTitle: "Web Developer",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            startDate: "2020",
            endDate: "2021",
          },
        ],
      },
    };
  }

  render() {
    return (
      <div>
        <GeneralData data={this.state.data.general} />
        <WorkData data={this.state.data.work} />
        <EducationalData data={this.state.data.educational} />
      </div>
    );
  }
}

export default App;
