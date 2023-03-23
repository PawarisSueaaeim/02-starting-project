import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUsers = (props) => {
  const [useredChange, setUseredChange] = useState("");
  const [ageChange, setAgeChange] = useState("");
  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    if (useredChange.trim().length === 0 || ageChange.trim().length === 0) {
      setError({
        title: "Invalid input",
        massage: "Please enter name and age",
      });
      return;
    }
    if (+ageChange < 0) {
      setError({
        title: "Invalid input",
        massage: "Please enter age (> 0)",
      });
      return;
    }
    props.onAddUser(useredChange, ageChange);
    setAgeChange("");
    setUseredChange("");
  };

  const inputuseredOnChangehandler = (event) => {
    setUseredChange(event.target.value);
  };

  const inputedAgeOnChangehandler = (event) => {
    setAgeChange(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} massage={error.massage} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label>Username</label>
          <input
            type="text"
            value={useredChange}
            onChange={inputuseredOnChangehandler}
          />

          <label>age</label>
          <input
            type="number"
            value={ageChange}
            onChange={inputedAgeOnChangehandler}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUsers;
