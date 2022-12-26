import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Main({ toDo, setToDo }) {
  const [value, setValue] = useState("");

  function saveTask() {
    setToDo([
      ...toDo,
      {
        id: uuidv4(),
        title: value,
        status: true,
      },
    ]);
    setValue("");
  }

  return (
    <div id="new__task">
      <div className="to__do">
        <span className="text__to__do">To do List</span>
      </div>
      <input
        type="text"
        placeholder="What do you have to do?"
        value={value}
        onChange={(element) => setValue(element.target.value)}
      />
      <button id="push" onClick={saveTask}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}

export default Main;
