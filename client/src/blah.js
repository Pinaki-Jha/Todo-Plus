import React, {useState, useRef, useEffect} from "react";
const storedTodos = localStorage.getItem("todoApp.todos")
console.log(JSON.parse(storedTodos))