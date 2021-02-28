import React, { useState, Component } from "react";
import "./App.css";
import { Button } from "@material-ui/core";
import Todo from "./Todo";
import Icon from "@material-ui/core/Icon";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [subinput, setSubInput] = useState("");

  const addItem = (event) => {
    const setInputEnv = {
      id: 1 + Math.random(),
      value: input,
      sublist: [],
    };

    event.preventDefault();

    setTodos([...todos, setInputEnv]);
    setInput("");
  };
  //add another sub item
  const addSubItem = (sublist) => {
    const setSubInputEnv = {
      id: 1 + Math.random(),
      value: subinput,
    };
    sublist.push(setSubInputEnv);

    setSubInput("");
  };

  // remove id
  const removeTodo = (id) => {
    let updateList = todos.filter((item) => {
      return item.id !== id;
    });

    setTodos([...updateList]);
  };

  //clear todo array
  const clear = (event) => {
    event.preventDefault();
    setTodos([]);
  };

  //remove sub todo
  const removeSubTodo = (id) => {
    // let sub = sublist.filter((items) => items.id != id);

    // const updated = todos.map((items) => {
    //   return items.sublist.map((sub) => sub.id);
    // });

    let todosImp = todos.map((item) => {
      return item;
    });
    let todosF = todosImp.map((item) => {
      return item.sublist.filter((sub) => sub.id !== id);
    });
    for (const id of todosImp) {
      id.sublist = todosF;
    }
    setTodos([...todosImp]);
    console.log(todos);
    // console.log(todosImp, todosF);
  };
  return (
    <div className="App">
      <form>
        <input
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button type="submit" disabled={!input} onClick={addItem}>
          +
        </button>
        <button onClick={clear}>Clear</button>

        {/* //secondinput for sub lists */}
        <div>
          <input
            value={subinput}
            onChange={(event) => {
              setSubInput(event.target.value);
            }}
          />
        </div>
        {todos.map((item) => {
          return (
            <h2 key={item.id}>
              {item.value}

              <button
                onClick={(event) => {
                  event.preventDefault();
                  addSubItem(item.sublist);
                }}
              >
                +
              </button>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  removeTodo(item.id);
                }}
              >
                Delete
              </button>

              {item.sublist.map((sub) => {
                return (
                  <ul key={sub.id}>
                    {sub.value}
                    <button
                      onClick={(event) => {
                        console.log(todos);
                        event.preventDefault();
                        removeSubTodo(sub.id);
                      }}
                    >
                      complete
                    </button>
                  </ul>
                );
              })}
            </h2>
          );
        })}
      </form>
    </div>
  );
}

export default App;
