import ToDoCard from "../Components/ToDoCard";

const HomePage = (props) => {
    
    return (
        <div>
            <h1>Fullstack ToDo Application</h1>
            <div className="to-do-list">
                {props.toDoList.map((toDo, index) => {
                    return <ToDoCard toDo={toDo} key={index}/>;
                })}
            </div>
        </div>
    )
}

export default HomePage;