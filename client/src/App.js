import React, {useState, useRef, useEffect} from "react";
import './App.css';
import ToDoList from "./ToDoList.js"
import TheTop from "./TheTop.js"
import styles from "./styles.module.css"
import TheLeft from "./TheLeft";



function App() {

  

  const [todos, setTodos] = useState([ ])  //An array of todos and a method to set the vales inside it using the usestate hook.
  const toDoNameRef = useRef()             //using the useRef hook to get access to the input value in the form into a variable. 

  
  
  function toggleTodo(id){
    let newTodos = [...todos];
    const todo= newTodos.find(todo => todo.id===id)
    todo.complete = !todo.complete;
    setTodos(newTodos)
  }
  //Have to add Storage functionality using MongoDB and Mongoose

  function handleAddToDo(){                   //function to handle adding to-dos to the list   
    const name = toDoNameRef.current.value;   
    if(name===""){              //prevent addition of empty strings as todos
      return;
    }
    setTodos(prevTodos => {     //add this todo to the list of prev todos as an object with id randomly generated)
      return[...prevTodos,{id:Math.random(),name:name,completed:false}];   //might look up an npm library for random id generated later
    })
    toDoNameRef.current.value= null;

  }

//function to clear all todos
  function handleClearToDo(){
    const newTodos = todos.filter(todo =>!todo.complete);

    setTodos(newTodos)
  }

  //return statement
  return (
    <>

    <TheTop/>                           { /*The Topmost div component. Might turn it into a fixed navbar later */ }

    <div className={styles.todolist}>    {/*The rightmost div component, i.e., the To-Do list functionality*/}
      <p className={styles.headings}> Your To-Dos</p>
      <ToDoList todos = {todos} toggleTodo={toggleTodo}/>
      <div className={styles.todoform}>
        <input type="text" ref={toDoNameRef} onKeyDown = {function(event){if(event.code==="Enter"){handleAddToDo();}}} ></input>
        <button className={styles.btn} onClick={handleAddToDo}>+</button>
        <button onClick={handleClearToDo} className={styles.btn}>-</button> 
      </div>
      <p>{todos.filter(todo => !todo.complete).length} left to do </p>
    </div>

    <div className={styles.theleft}>
      <TheLeft/>                       {/* The leftmost div component. Have to add the user's name, the date and the weather functionality in this block */}
    </div>
   
   </>
  );
}

export default App;