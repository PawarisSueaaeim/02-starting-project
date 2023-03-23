import React, { useState }from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUsers = (props) => {
  const [useredChange, setUseredChange] = useState('');
  const [ageChange, setAgeChange] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    if (useredChange.trim().length === 0 || ageChange.trim().length === 0) {
      return;
    }
    if (+ageChange < 0) {
      return;
    }
    console.log(useredChange, ageChange);
    setAgeChange('');
    setUseredChange('');
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
        <input type="text" value={useredChange} onChange={inputuseredOnChangehandler}/>

        <label>age</label>
        <input type="number" value={ageChange} onChange={inputedAgeOnChangehandler}/>

        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
