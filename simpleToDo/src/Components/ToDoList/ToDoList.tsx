import React from "react";

const ToDoList = () => {
  return (
    <>
      <div className="myContainer">
        <div className="row">
          <h1>ToDo List</h1>
          <input type="text"/>
          <button className="addButton">Add</button>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
