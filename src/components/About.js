import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Component did Mount");
  }

  render() {
    //console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React Web Series</h2>

        <UserClass name={"First"} location={"Dehradun Class"} />
        <User />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Web Series</h2>

//       <UserClass name={"Akshay Saini (class)"} location={"Dehradun Class"} />
//     </div>
//   );
// };

/* 
-Parent Constructor
-Parent render

  -First constructor
  -First render
  

  -Second constructor
  -Second render

  <DOM UPDATES - IN SINGLE BATCH> Optimises the performance
  -First componentdidmount
  -Second componentdidmount

  -Parent did mount


*/

export default About;
