import React from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

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

        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
