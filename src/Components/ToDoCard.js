const ToDoCard = (props) => {
    return (
        <div className="todo-card">
            <h2>{props.todo.Title}</h2>
            <p>{props.todo.Id}</p>
            <p>{props.todo.Description}</p>
        </div>
    )
};

export default ToDoCard;