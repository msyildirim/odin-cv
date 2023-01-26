import {GeneralInfo, Education} from "./components";
import Experience from "./Components/Experience";
import { Component } from "react";

class App extends Component{

  render(){
    return (
      <div>
      <GeneralInfo />
      <Education />
      <Experience />
      </div>
    )
  }

}


export default App;
