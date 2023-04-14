import React from "react"
import styles from "./styles.module.css"

function ToDo(props){
    function handleChange(){
        props.toggleTodo(props.todo.id)
    }
    return(
        <>
        <label>
            <input type = "checkbox" checked={props.todo.complete} onClick={handleChange}/>
            {props.todo.name}
            
        </label>
        
        </>
    )
    
}
export default ToDo;