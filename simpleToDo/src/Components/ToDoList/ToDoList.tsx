import { Key, useState } from "react";
interface ToDoList {
  id: Key | null | undefined;
  todolist: string;
}


const ToDoList = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="myContainer">
          <div className="row">
            <div className="meetingTitle">
              Household Chores
            </div>
            <input className="inputField"type="text"></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
