import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let btnStyle = {
    padding: "5px",
    marginLeft: "10px",
    marginTop: "10px",
  };

  let [todoArr, setTodoArr] = useState([]);
  let [input, setInput] = useState("");

  let updateInput = (event) => {
    setInput(event.target.value);
  };

  let insertTodo = () => {
    if (input !== "") {
      setTodoArr((prevTodoArr) => [
        ...prevTodoArr,
        { id: uuidv4(), task: input, isDone: false },
      ]);
      setInput("");
    }
  };

  let deleteTodo = (id) => {
    setTodoArr((prevTodoArr) => prevTodoArr.filter((todo) => todo.id !== id));
  };

  let upperCaseAll = () =>
    setTodoArr((prevTodoArr) =>
      prevTodoArr.map((todo) => {
        return { ...todo, task: todo.task.toUpperCase() };
      })
    );

  let lowerCaseTodo = (id) => {
    setTodoArr((prevTodoArr) =>
      prevTodoArr.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toLowerCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  let markAsDone = (id) => {
    setTodoArr((prevTodoArr) =>
      prevTodoArr.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isDone: true };
        } else {
          return todo;
        }
      })
    );
  };

  let markAllAsDone = () => {
    setTodoArr((prevTodoArr) =>
      prevTodoArr.map((todo) => {
        return { ...todo, isDone: true };
      })
    );
  };

  let markAsUnDone = (id) => {
    setTodoArr((prevTodoArr) =>
      prevTodoArr.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isDone: false };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <>
      <h1>Todo List</h1>
      <input
        style={{
          height: "17px",
          marginRight: "10px",
          padding: "5px",
          borderRadius: "9px",
          border: "1px solid #ccc",
        }}
        placeholder="Enter Task to add"
        value={input}
        onChange={updateInput}
      />
      <button
        style={{
          ...btnStyle,
          ...{ backgroundColor: "green", width: "70px", marginLeft: "0px" },
        }}
        onClick={insertTodo}
      >
        Add
      </button>
      <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
      <ul>
        {todoArr.map((todo) => (
          <li key={todo.id}>
            <span
              style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {todo.task}
            </span>
            <button
              style={{ ...{ backgroundColor: "red" }, ...btnStyle }}
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
            <button
              style={{ ...{ backgroundColor: "blue" }, ...btnStyle }}
              onClick={() => lowerCaseTodo(todo.id)}
            >
              LowerCase
            </button>
            <button
              style={{
                ...{ backgroundColor: "white", color: "black" },
                ...btnStyle,
              }}
              onClick={() => markAsDone(todo.id)}
            >
              Mark as Done
            </button>
            <button
              style={{
                ...{ backgroundColor: "chartreuse", color: "black" },
                ...btnStyle,
              }}
              onClick={() => markAsUnDone(todo.id)}
            >
              Mark as UnDone
            </button>
          </li>
        ))}
      </ul>
      <hr style={{ marginTop: "50px", marginBottom: "20px" }} />{" "}
      <button
        onClick={upperCaseAll}
        style={{
          ...{ backgroundColor: "yellow", color: "black" },
          ...btnStyle,
        }}
      >
        UpperCase All
      </button>
      <button
        style={{ ...{ backgroundColor: "pink", color: "black" }, ...btnStyle }}
        onClick={markAllAsDone}
      >
        Mark All as Done
      </button>
    </>
  );
}
