import { useState } from "react";
import styles from "./ToDoList.module.css"
import { LiaTrashSolid } from "react-icons/lia";
import { MdOutlineModeEdit } from "react-icons/md";

interface ToDoList {
  id: number | null;
  todolist: string;
  isCompleted: boolean;
}

const ToDoList = () => {
  //useState to help with our input state
  const [input, setInput] = useState('');

  //useState to help track our list
  const [list, setList] = useState<ToDoList[]>([]);

  //useState to update our list
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editInput, setEditInput] = useState('');

  //create a function to help us add to our todo list
  const addToDoList = (newItem: string) => {
    // Create a new todo item object
    const newTodo: ToDoList = {
      // Generate a random id for the new todo item
      id: Math.random(),
      // Set the todolist property to the newItem passed as an argument
      todolist: newItem,
      // Set isCompleted to false for new items
      isCompleted: false
    };

    // Create a new array by spreading the existing list and adding the newTodo item
    setList([...list, newTodo]);

    // Clear the input field by setting the input state to an empty string
    setInput("");
  };

  // create an edit/update function
  const editToDoList = (id: number, newText: string) => {
    const updatedList = list.map((item) =>
      item.id === id ? { ...item, todolist: newText } : item
    );
    setList(updatedList);
    setEditingId(null);
    setEditInput('');
  };

  // create a stop editing function
  const editStop = () => {
    setEditingId(null);
    setEditInput("");
  };

  const deleteTodo = (id: number) => {
    // Filter the existing list to create a new list without the item to be deleted
    const updatedList = list.filter((item) => {
      // Check if the current item's id doesn't match the id passed to the function
      if (item.id !== id) {
        // If the ids don't match, include the item in the new list
        return true;
      } else {
        // If the ids match, exclude the item from the new list
        return false;
      }
    });

    // Update the list state with the new list
    setList(updatedList);
  };

  const toggleComplete = (id: number) => {
    const updatedList = list.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setList(updatedList);
  };

  return (
    <>
      <div className="mainContainer">
        <div className="myContainer">
          <div className="row">
            <div className="meetingTitle">
              Household Chores
              <div className="row">
                <input
                  className="inputField"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button className="addButton" onClick={() => addToDoList(input)}>
                  Add
                </button>
              </div>
              <ul>
  {list.map((item) => (
    <li key={item.id}>
      {editingId === item.id ? (
        // Render input field for editing when editingId matches the current item's id
        <input
          type="text"
          value={editInput}
          onChange={(e) => setEditInput(e.target.value)} // Update editInput state as user types
          onBlur={() => editToDoList(item.id!, editInput)} // Call editToDoList function when user moves focus away from input
        />
      ) : (
        <>
      {/*adds checkbox */}
          <input
            type="checkbox"
            checked={item.isCompleted}
            onChange={() => toggleComplete(item.id!)}
          />

          {/* adds line through text */}
          <span style={{ textDecoration: item.isCompleted ? 'line-through' : 'none' }}>
            {item.todolist}
          </span>

          {/* edit button */}
          <button
            onClick={() => {
              setEditingId(item.id);
              setEditInput(item.todolist);
            }}
          >
            <MdOutlineModeEdit />
          </button>

          {/* delete button*/}
          <button onClick={() => deleteTodo(item.id!)}>

          <LiaTrashSolid />
          </button>
        </>
      )}
    </li>
  ))}
</ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoList;