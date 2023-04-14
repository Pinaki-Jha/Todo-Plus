import React from "react";
import ToDo from "./ToDo"

function ToDoList(props){
    return(
    <div>
        {props.todos.map((todo) => <><ToDo todo={todo} key={todo.id} toggleTodo={props.toggleTodo} /><br/></>)}  
    </div>
    )
}

export default ToDoList;
