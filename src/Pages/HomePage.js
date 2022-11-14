import React from 'react'
import ToDoCard from "../Components/ToDoCard";

const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT

const HomePage = (props) => {
    
    return (
        <div>
            <h1>Fullstack ToDo Application</h1>
            <div className="to-do-list">
                {props.toDoList.map((toDo, index) => {
                    return <ToDoCard toDo={toDo} key={index} urlEndpoint={urlEndpoint} refetch={props.refetch} />;
                })}
            </div>
        </div>
    )
}

export default HomePage;