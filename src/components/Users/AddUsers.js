import React from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";

const AddUsers = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input type="text" />

        <label>age</label>
        <input type="number" />

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default AddUsers;
