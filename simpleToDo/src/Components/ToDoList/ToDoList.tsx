import { useState } from "react";

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
  const [editId, setEditId] = useState<number | null>(null);

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

  const editToDoList = (id: number, newValue: string) => {
    const updatedList = list.map((item) => {
      if (item.id === id) {
        return { ...item, todolist: newValue };
      }
      return item;
    });
    setList(updatedList);
    setEditId(null);
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
                    {editId === item.id ? (
                      <input
                        type="text"
                        value={item.todolist}
                        onChange={(e) => editToDoList(item.id!, e.target.value)}
                      />
                    ) : (
                      <>
                        <input
                          type="checkbox"
                          checked={item.isCompleted}
                          onChange={() => toggleComplete(item.id!)}
                        />
                        <span style={{ textDecoration: item.isCompleted ? 'line-through' : 'none' }}>
                          {item.todolist}
                        </span>
                      </>
                    )}
                    <button onClick={() => editToDoList(item.id!, item.todolist)}>
                      Edit
                    </button>
                    <button onClick={() => deleteTodo(item.id!)}>X</button>
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