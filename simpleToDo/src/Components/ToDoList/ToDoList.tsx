import { useState } from "react";

interface ToDoList {
  id: number | null;
  todolist: string;
}

const ToDoList = () => {
  //useState to help with our input state
  const [input, setInput] = useState('');

  //useState to help track our list
  const [list, setList] = useState<ToDoList[]>([]);
  const [editId, setEditId] = useState<number | null>(null);

  //create a function to help us add to our todo list
  const addToDoList = (newItem: string) => {
    const newTodo: ToDoList = {
      id: Math.random(),
      todolist: newItem
    };
    setList([...list, newTodo]);
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
    const updatedList = list.filter((item) => item.id !== id);
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
                      item.todolist
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