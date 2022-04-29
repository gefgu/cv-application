import React, { Component, useState } from "react";
import General from "./components/General";
import Work from "./components/Work";
import Education from "./components/Education";
import "./styles/app.css";

function App() {
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

  const handleEducationEdit = (e) => {
    let newEducation = education;
    newEducation[e.target.dataset.index][e.target.name] = e.target.value;
    setEducation([...newEducation]);
  };

  const enableEducationEdit = (index, shouldEnable) => {
    let newEducation = education;
    newEducation[index].editing = shouldEnable;
    setEducation([...newEducation]);
  };

  const deleteEducationElement = (index) => {
    let newEducation = education;
    newEducation.splice(index, 1);
    setEducation([...newEducation]);
  };

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

  const addWork = () => {
    let newWork = work.concat([
      {
        companyName: "",
        positionTitle: "",
        description: "",
        startDate: "",
        endDate: "",
        editing: true,
      },
    ]);

    setWork(newWork);
  };

  const handleWorkEdit = (e) => {
    let newWork = work;
    newWork[e.target.dataset.index][e.target.name] = e.target.value;
    setWork([...newWork]);
  };

  const enableWorkEdit = (index, shouldEnable) => {
    let newWork = work;
    newWork[index].editing = shouldEnable;
    setWork([...newWork]);
  };

  const deleteWorkElement = (index) => {
    let newWork = work;
    newWork.splice(index, 1);
    setWork([...newWork]);
  };

  return (
    <div className="cv-container">
      <General
        data={general}
        handleEdit={handleGeneralEdit}
        enableEdit={enableGeneralEdit}
      />
      <Work
        data={work}
        addWork={addWork}
        handleWorkEdit={handleWorkEdit}
        enableWorkEdit={enableWorkEdit}
        deleteWorkElement={deleteWorkElement}
      />
      <Education
        data={education}
        addEducation={addEducation}
        handleEducationEdit={handleEducationEdit}
        enableEducationEdit={enableEducationEdit}
        deleteEducationElement={deleteEducationElement}
      />
    </div>
  );
}

export { HookApp };
export default App;
