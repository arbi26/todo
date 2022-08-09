import { useState } from 'react';
import './App.css';
import Sidebar from './Components/sidebar';
import Todoform from './Components/todoForm';
import Todolist from './Components/todolList';

function App() {
const [input, setInput]= useState("");
const [todos, setTodos] = useState([]);
const [textarea, setTextarea] = useState("");
  
const onCompletedToDo =  (todoId) => {
  setTodos(...todos, (({ id }) => id !== todoId));
};

  return (
    <div className='row'>
      <div className="col-3">
      <Sidebar/>

      </div>
      <div className="col-7">
      <Todoform
        todos={todos}
        setTodos={setTodos}
      />
      <Todolist
      todos={todos}
      setTodos={setTodos}
      onCompletedToDo={onCompletedToDo}
      />      </div> 
      
    </div>
  );
}

export default App;
