import React, { useState }from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUsers = (props) => {
  const [useredChange, setUseredChange] = useState('');
  const [ageChange, setAgeChange] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(useredChange, ageChange);
  };

  const inputuseredOnChangehandler = (event) => {
    setUseredChange(event.target.value);
  };

  const inputedAgeOnChangehandler = (event) => {
    setAgeChange(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input type="text" onChange={inputuseredOnChangehandler}/>

        <label>age</label>
        <input type="number" onChange={inputedAgeOnChangehandler}/>

        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
