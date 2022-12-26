import React from "react";
import "./toDoList.css";
import "../Main/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faLock, faUnlock } from "@fortawesome/free-solid-svg-icons";
function ToDoList({ toDo, setToDo }) {
  function deleteToDo(id) {
    let newtoDo = [...toDo].filter((item) => item.id !== id);
    setToDo(newtoDo);
  }

  function statusToDo(id) {
    let newtoDo = [...toDo].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setToDo(newtoDo);
  }

  return (
    <div className="main__div">
      {toDo.map((item) => (
        <div id="tasks" key={item.id}>
          <div className="new__task__to__do">
            <div id="width" className={!item.status ? "close" : ""}>
              {item.title}
            </div>
            <div>
              <button className="btn" onClick={() => statusToDo(item.id)}>
                {item.status ? (
                  <FontAwesomeIcon icon={faLock} />
                ) : (
                  <FontAwesomeIcon icon={faUnlock} />
                )}
              </button>
              <button className="btn" onClick={() => deleteToDo(item.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ToDoList;
