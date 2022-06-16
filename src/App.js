import React from "react";
import { TodoCounter } from './TodoCounter' 
import { TodoSearch } from './TodoSearch' 
import { TodoList } from './TodoList' 
import { TodoItem } from './TodoItem' 
import { CreateTodoButton } from './CreateTodoButton'  
import { TodoCreate } from './TodoCreate'  
import './App.css';

const todos = [
  { text: 'Cortar Cebolla', completed: false },
  { text: 'Cocinar la pechuga', completed: false },
  { text: 'Emplatar pollo', completed: false }
]

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="container__create">
          <TodoCreate />
        </div>
        <div className="container__task">
          <TodoCounter />
          
          <TodoSearch />
          
          <TodoList>
            {todos.map(todo => (
              <TodoItem key={todo.text} text={todo.text} />
            ))}
          </TodoList>
          
          <CreateTodoButton />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

