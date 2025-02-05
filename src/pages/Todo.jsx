import React, { useState } from 'react'
import './todo.css';
import { useLocation } from 'react-router-dom';
function Todo() {
    // useprams => 
    const loc = useLocation();
    console.log(loc);
    const [input, setInput] = useState("");
    const [todos, setTodo] = useState([])
    const handle = (e) => {
        setInput(e.target.value);
    }
    function add() {

        setTodo([...todos, input]);
        setInput("");

    }
    function remove(index) {
        todos.splice(index, 1);
        setTodo([...todos]);
    }

    return (
        <>
            <div id="myDIV" className="header">
                <h2 style={{ margin: 5 }}>My To Do List</h2>
                <input value={input} type="text" id="myInput" onChange={handle} placeholder="Title..." />
                <span onClick={add} class="addBtn">Add</span>
            </div>
            <ul>
                {
                    todos.map((item, index) => {
                        return <li key={index}>{item} <span onClick={() => remove(index)} className='close'>X</span></li>
                    })
                }


            </ul>

        </>
    )
}

export default Todo