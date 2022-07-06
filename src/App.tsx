import React, { useState } from "react";

import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./modal";

/* let name:string = 'Nikita';
let age: number | string;
let isStuden: boolean;
let hobbies:string[];
let role: [number, string]
let smthng : any;

// type Person ={
//   name:string;
//   age?:number;
// }

// let person:Person={
//   name:'Nikita',
//   age:28
// };

// let lotsOfPpl:Person[];
let printName:(name:string)=>never;

// function printName(name:string){
//   console.log(name)
// }

let personName:unknown;

type X ={
  a:string;
  b:number;
}

type Y = X & {
  c:string;
  d:number;
}

let y:Y ={
  c:'qwe',
  d:1
}

interface Guy extends Person {
  profession: string
} */

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  // console.log(todo);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Todo-todo</span>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos}
      />
      {/* {todos.map(t=>(<li>{t.todo}</li>))} */}
    </div>
  );
};

export default App;
