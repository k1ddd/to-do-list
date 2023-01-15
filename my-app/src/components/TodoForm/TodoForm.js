import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";

function TodoForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  function saveTask() {
    if (!title.trim()) {
      setTitle("");
      return;
    }

    dispatch(
      addTodo({
        id: uuidv4(),
        title: title,
        status: true,
      })
    );
    setTitle("");
  }

  return (
    <div id="new__task">
      <div className="to__do">
        <span className="text__to__do">To do List</span>
      </div>
      <input
        type="text"
        placeholder="What do you have to do?"
        value={title}
        onChange={(event)=> setTitle(event.target.value)}
      />
      <button id="push" onClick={saveTask}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}

export default TodoForm;
