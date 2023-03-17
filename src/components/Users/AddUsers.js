import React from "react";

const AddUsers = (props) => {

    const submitHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={submitHandler()}>
            <label>Username</label>
            <input type="text"/>

            <label>age</label>
            <input type="number"/>

            <button type="submit">Submit</button>
        </form>
    )
}

export default AddUsers;