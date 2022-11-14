import React from "react";

const ToDoCard = ({ toDo, urlEndpoint, refetch }) => {
    const id = toDo.id 

    const handleSetToDoComplete = async () => {
        refetch(true)
        const request = await fetch(`${urlEndpoint}/todos/update-one/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json", // This COntent-Type flag is used to tell the server that our request body should be parsed as a JSON object
            },
            body: JSON.stringify({
                isComplete: toDo.isComplete ? false : true
            }),
        });
        // update needs to be set back to false otherwise it wont listen for anymore changes after the initial one
        refetch(false)
    }

    const handleDeleteToDo = async () => {
        refetch(true)
        const request = await fetch(`${urlEndpoint}/todos/delete-one/${id}`, {
            method: "DELETE",
        })
        refetch(false)
    }

    return (
        <div className="todo-card">
            <h2>{toDo.title}</h2>
            <p>ID: {toDo.id}</p>
            <p>Description: {toDo.description}</p>
            <p>Priority: {toDo.priority}</p>
            <p>Is Complete: {toDo.isComplete ? ' Complete': 'Incomplete'}</p>
                <button onClick={(e) => {handleSetToDoComplete() }}>Toggle Complete</button>
                <br/>
                <button onClick={(e) => {handleDeleteToDo() }}>Delete</button>
            <p>Creation Date: {toDo.creationDate}</p>
            <p>Last Modified: {toDo.lastModified}</p>
            <p>Completion Date: {toDo.completedDate !== null && toDo.completedDate}</p>
        </div>
    )
};

export default ToDoCard;