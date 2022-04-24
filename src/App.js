import React, { Component } from "react";
import GeneralData from "./components/GeneralData";
import WorkData from "./components/WorkData";
import EducationalData from "./components/EducationalData";

class App extends Component {
  render() {
    return (
      <div>
        <GeneralData />
        <WorkData />
        <EducationalData />
      </div>
    );
  }
}

export default App;
