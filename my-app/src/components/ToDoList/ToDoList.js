import React from 'react';
import './toDoList.css';
import '../TodoForm/TodoForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteTodo, changeStatusTodo } from '../../redux/todoSlice';

function ToDoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  function handleDelete(id) {
    dispatch(deleteTodo(id));
  }

  function handleStatus(id) {
    dispatch(changeStatusTodo(id));
  }

  return (
    <div className="main__div">
      {todos.map((item) => (
        <div id="tasks" key={item.id}>
          <div className="new__task__to__do">
            <div id="width" className={!item.status ? 'close' : ''}>
              {item.title}
            </div>
            <div>
              <button className="btn" onClick={() => handleStatus(item.id)}>
                {item.status ? (
                  <FontAwesomeIcon icon={faLock} />
                ) : (
                  <FontAwesomeIcon icon={faUnlock} />
                )}
              </button>
              <button className="btn" onClick={() => handleDelete(item.id)}>
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
