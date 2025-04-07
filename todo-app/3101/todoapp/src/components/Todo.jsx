import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoMap from "./TodoMap";
import Header from "./Header";
import Footer from "./Footer";

export default function TodoList(){
    
    let[todos,setTodos]= useState([]);
    let[count,setCount]= useState(0);
    return(
        <>
        <Header/>
        <TodoForm todos={todos} setTodos={setTodos} count={count} setCount={setCount}/>
        <TodoMap todos= {todos} setTodos={setTodos} count={count} setCount={setCount}/>
        <Footer/>
        </>
    )
}