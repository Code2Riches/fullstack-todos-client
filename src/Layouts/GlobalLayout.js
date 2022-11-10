import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";

const GlobalLayout = (props) => {
      
    return (
        <div className="todolist-layout">
            <h1>Global Layout</h1>
            <NavBar toDoList={props.toDoList}/>
            <div className="todolist-content">
             <Outlet />
            </div>
        </div>
    )
}

export default GlobalLayout;