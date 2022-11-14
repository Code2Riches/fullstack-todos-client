import React from "react";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'



const ToDoFormPage = ({ urlEndpoint, refetch }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [successMessage, setSuccessMessage] = useState("")

    const navigate = useNavigate();
    const redirectHome = () => {
        navigate('/')
    };


    const handleCreateTodo = async () => {
        refetch(true)
        setSuccessMessage("")
        const response = await fetch(`${urlEndpoint}/todos/create-one`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                description,
                priority,
            })
        })
        if (response.ok !== true) {
            setSuccessMessage("There was a network problem creating the todo")
            return;
        }
        const payload = await response.json()
        if (payload.success !== true) {
            setSuccessMessage(`There was a server problem creating the todo. Error: ${payload.error}`)
            return;
        }
        setSuccessMessage("Successfully created the todo")
    }

    return (
        <div>
            <h1>Create ToDo Form</h1>
            <h2>{successMessage}</h2>
            <label>Title: </label>
            <input type="text" onChange={(e) => { setTitle(e.target.value) }}></input>
                <br />
                <br />
            <label>Description: </label>
            <textarea onChange={(e) => { setDescription(e.target.value) }}></textarea>
                <br />
                <br />

            <label>Set Priority Level: </label>
            <select onChange={(e) => { setPriority(e.target.value) }}>
                <option value='High'>High</option>
                <option value='Medium'>Medium</option>
                <option value='Low'>Low</option>
            </select>
                <br />
                <br />
            <button onClick={() => { handleCreateTodo(); redirectHome(); }}>Create ToDo</button>
        </div>
    )
}

export default ToDoFormPage
