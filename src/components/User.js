import { useState, useEffect } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    //api call
    const timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);
    console.log("useEffect");

    return () => {
      console.log("useEffect returned");
      clearInterval(timer);
    };
  }, []);
  console.log("Render");

  // useEffect(() => {
  //   //api call

  //   //console.log("useEffect");
  // }, [count2]);

  return (
    <div className="user-card">
      <h1>Count = {count} </h1>
      <h1>Count2 = {count2} </h1>
      <h2>{name}</h2>
      <h3>Location: Dehradun</h3>
      <h4>Contact: @akshaymarch7</h4>
    </div>
  );
};

export default User;
