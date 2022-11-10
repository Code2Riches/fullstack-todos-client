import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";

const GlobalLayout = (props) => {
      
    return (
        <div className="todo-layout">
            <h1>Global Layout</h1>
            <NavBar todoList={props.todoList}/>
            <div className="todo-content">
             <Outlet />
            </div>
        </div>
    )
}

export default GlobalLayout;