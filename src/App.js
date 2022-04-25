import React, { Component } from "react";
import General from "./components/General";
import Work from "./components/Work";
import Education from "./components/Education";
import "./styles/app.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        general: {
          name: "John Doe",
          email: "gefgu12@gmail.com",
          phone: "+55 (99) 99999-9999",
        },
        education: [
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
      editing: {
        general: false,
        education: false,
        work: false,
      },
    };
  }

  handleGeneralEdit = (e) => {
    let newData = this.state.data;
    newData.general[e.target.id] = e.target.value;
    this.setState({ data: newData });
  };

  enableGeneralEdit = (shouldEnable) => {
    this.setState({
      editing: {
        general: shouldEnable,
      },
    });
  };

  render() {
    return (
      <div className="cv-container">
        <General
          data={this.state.data.general}
          editing={this.state.editing.general}
          handleEdit={this.handleGeneralEdit}
          enableEdit={this.enableGeneralEdit}
        />
        <Work data={this.state.data.work} />
        <Education data={this.state.data.education} />
      </div>
    );
  }
}

export default App;

// TODO: Add unique key to data
