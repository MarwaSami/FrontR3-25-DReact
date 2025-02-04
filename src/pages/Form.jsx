import React, { useState } from 'react'
import './style.css'
function Form() {
    const [user, setUser] = useState(); // store 
    const [err, setErr] = useState()
    function handleChange(e) {
        if (e.target.name == 'name') {
            if (e.target.value.length < 5) {
                setErr({ ...err, name: "name must be more than 5" })
            }
            else {
                setErr({ ...err, name: "" })
                setUser({ ...user, name: e.target.value })
            }
        }
        else {
            if (e.target.value < 20) {
                setErr({ ...err, age: "you still younger" })
            }
            else {
                setErr({ ...err, age: "" })
                setUser({ ...user, age: e.target.value })
            }
        }
    }
    function save() {
        if (err.name == "" && err.age == "") {
            console.log(user); // or send data to backend
        }
    }
    return (
        <div>
            <input className={err?.name && 'err'} type="text" name="name" onChange={handleChange} placeholder='enter name' />
            <br />
            {err?.name && <small style={{ color: 'red' }}>{err?.name}</small>}
            <br />
            <input className={err?.age && 'err'} type="text" name='age' onChange={handleChange} placeholder='enter age' />
            <br />
            {err?.age && <small style={{ color: 'red' }}>{err?.age}</small>}
            <br />
            <button disabled={err.name || err.age && true} onClick={save}>save</button>
        </div>
    )
}

export default Form