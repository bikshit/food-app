import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        // avatar_url: "http://dummy-photo.com",
      },
      //count: 0,
      //count2: 2,
    };
    //console.log(this.props.name + "Child Constructor");
  }
  async componentDidMount() {
    //this.timer = setInterval(() => {
    //console.log("Namaste React OP");
    //}, 1000);
    //console.log(this.props.name + " Child Component did Mount");
    //Api call

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.count !== prevState.count ||
      this.state.count !== prevState.count
    ) {
      //Code
    }
    if (this.state.count !== prevState.count2) {
      //Code
    }
    //console.log("Component did update");
  }

  componentWillUnmount() {
    //clearInterval(this.timer);
    //console.log("Component unmounted");
  }

  render() {
    //const { name, location } = this.props;
    //const { count, count2 } = this.state;
    //console.log(this.props.name + "Child render");

    const { name, location, avatar_url } = this.state.userInfo;
    //debugger;

    return (
      <div className="user-card">
        {/* <h1>Count: {count}</h1> */}
        {/* <button
          onClick={() => {
            //Never update state variables directly
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        {/* <h1>Count2: {count2}</h1> */}
        <img src={avatar_url} />
        <h2> Name: {name}</h2>
        <h3>Location: {location} </h3>
        <h4>Contact: @akshaymarch7</h4>
      </div>
    );
  }
}

export default UserClass;

/**
 * --- MOUNTING -----
 *
 * Constructor (dummy)
 * Render ((dummy)
 *      <HTML Dummy>
 * Component Did Mount
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ------------ UPDATE
 *
 *      render(API data)
 *      <HTML (new image data)>
 *    Component did update
 *
 *
 */
