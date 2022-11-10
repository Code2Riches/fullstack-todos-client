import { useState, useEffect } from "react"

const ToDoCard = ({ toDo, urlEndpoint }) => {
    const id = toDo.id 

    const handleSetToDoComplete = async () => {

        const request = await fetch(`${urlEndpoint}/todos/update-one/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json", // This COntent-Type flag is used to tell the server that our request body should be parsed as a JSON object
            },
            body: JSON.stringify({
                isComplete: toDo.isComplete ? false : true
            }),
        });
    }

    return (
        <div className="todo-card">
            <h2>{toDo.title}</h2>
            <p>ID: {toDo.id}</p>
            <p>Description: {toDo.description}</p>
            <p>Priority: {toDo.priority}</p>
            <p>Is Complete: {toDo.isComplete ? ' Complete': 'Incomplete'}</p>
                <button onClick={(e) => {handleSetToDoComplete() }}>Toggle</button>
            <p>Creation Date: {toDo.creationDate.toString()}</p>
            <p>Last Modified: {toDo.lastModified.toString()}</p>
            <p>Completion Date: {toDo.completedDate !== null && toDo.completedDate}</p>
        </div>
    )
};

export default ToDoCard;