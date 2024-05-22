import { useState } from "react";

interface ToDoList {
  id: Key | null | undefined;
  todolist: string;
}


const ToDoList = () => {

  //useState to help with our input state
const [input, setInput] = useState('');

//useState to help track our list
const [list, setlist] = useState<ToDoList>([]);

//create a function to help us add to our todo list
const addToDoList = (newItem:string) => {

    const newTodo = {
    id:Math.random(),
    todolist:newItem

    }
    setlist({...list,newTodo})
    setInput("");

}

  return (
    <>
      <div className="mainContainer">
        <div className="myContainer">
          <div className="row">
            <div className="meetingTitle">
            
              Household Chores
              <div className="row">
              <input className="inputField"type="text" value={input} onChange={(e)=> setInput(e.target.value)} />
              <button className="addButton" onClick={() => addToDoList(input)}>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}; add 

export default ToDoList;
