import React, { Component, useState } from "react";
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
          email: "John@gmail.com",
          phone: "+55 (99) 99999-9999",
          editing: false,
        },
        education: [
          {
            schoolName: "Harvard Business School",
            titleOfStudy: "Business Making",
            startDate: "2016",
            endDate: "2020",
            editing: false,
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
            editing: false,
          },
          {
            companyName: "Google",
            positionTitle: "Web Developer",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            startDate: "2020",
            endDate: "2021",
            editing: false,
          },
        ],
      },
    };
  }

  handleGeneralEdit = (e) => {
    let newData = this.state.data;
    newData.general[e.target.id] = e.target.value;
    this.setState({ data: newData });
  };

  enableGeneralEdit = (shouldEnable) => {
    let newData = this.state.data;
    newData.general.editing = shouldEnable;
    this.setState({
      data: newData,
    });
  };

  addEducation = () => {
    let newData = this.state.data;
    newData.education = newData.education.concat([
      {
        titleOfStudy: "",
        schoolName: "",
        startDate: "",
        endDate: "",
        editing: true,
      },
    ]);
    this.setState({
      data: newData,
    });
  };

  addWork = () => {
    let newData = this.state.data;
    newData.work = newData.work.concat([
      {
        companyName: "",
        positionTitle: "",
        description: "",
        startDate: "",
        endDate: "",
        editing: true,
      },
    ]);
    this.setState({
      data: newData,
    });
  };

  handleListEdit = (e, listing) => {
    let newData = this.state.data;
    newData[listing][e.target.dataset.index][e.target.name] = e.target.value;
    this.setState({
      data: newData,
    });
  };

  enableListEdit = (listing, index, shouldEnable) => {
    let newData = this.state.data;
    newData[listing][index].editing = shouldEnable;
    this.setState({
      data: newData,
    });
  };

  deleteListElement = (listing, index) => {
    let newData = this.state.data;
    let newArray = newData[listing].slice();
    newArray.splice(index, 1);
    newData[listing] = newArray;
    this.setState({
      data: newData,
    });
  };

  render() {
    return (
      <div className="cv-container">
        <General
          data={this.state.data.general}
          handleEdit={this.handleGeneralEdit}
          enableEdit={this.enableGeneralEdit}
        />
        <Work
          data={this.state.data.work}
          addWork={this.addWork}
          handleListEdit={this.handleListEdit}
          enableListEdit={this.enableListEdit}
          deleteListElement={this.deleteListElement}
        />
        <Education
          data={this.state.data.education}
          addEducation={this.addEducation}
          handleListEdit={this.handleListEdit}
          enableListEdit={this.enableListEdit}
          deleteListElement={this.deleteListElement}
        />
      </div>
    );
  }
}

function HookApp() {
  const [general, setGeneral] = useState({
    name: "John Doe",
    email: "John@gmail.com",
    phone: "+55 (99) 99999-9999",
    editing: false,
  });

  const handleGeneralEdit = (e) => {
    let newGeneral = { ...general };
    newGeneral[e.target.id] = e.target.value;
    setGeneral({ ...newGeneral });
  };

  const enableGeneralEdit = (shouldEnable) => {
    let newGeneral = { ...general };
    newGeneral.editing = shouldEnable;
    setGeneral({ ...newGeneral });
  };

  const [education, setEducation] = useState([
    {
      schoolName: "Harvard Business School",
      titleOfStudy: "Business Making",
      startDate: "2016",
      endDate: "2020",
      editing: false,
    },
  ]);

  const [work, setWork] = useState([
    {
      companyName: "Facebook",
      positionTitle: "Senior Web Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      startDate: "2021",
      endDate: "2022",
      editing: false,
    },
    {
      companyName: "Google",
      positionTitle: "Web Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      startDate: "2020",
      endDate: "2021",
      editing: false,
    },
  ]);

  const addEducation = () => {
    let newEducation = education.concat([
      {
        titleOfStudy: "",
        schoolName: "",
        startDate: "",
        endDate: "",
        editing: true,
      },
    ]);

    setEducation(newEducation);
  };

  return (
    <div className="cv-container">
      <General
        data={general}
        handleEdit={handleGeneralEdit}
        enableEdit={enableGeneralEdit}
      />
      <Work data={work} />
      <Education data={education} addEducation={addEducation} />
    </div>
  );
}

export { HookApp };
export default App;
