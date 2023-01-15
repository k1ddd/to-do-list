import TodoForm from './components/TodoForm/TodoForm';
import ToDoList from './components/ToDoList/ToDoList';
import './App.css';

function App() {
  return (
    <div className="App container">
      <TodoForm />
      <ToDoList />
    </div>
  );
}

export default App;
