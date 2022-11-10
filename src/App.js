import {useState, useEffect} from "react";
import GlobalLayout from "./Layouts/GlobalLayout";
import NavBar from "./Components/NavBar";
import ToDoCard from "./Components/ToDoCard";
import HomePage from "./Pages/HomePage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import './App.css';

const urlEndpoint = "http://localhost:4000"

function App() {
  
  const [toDoList, setToDoList] = useState([]);
  const router = createBrowserRouter([
    {
    path: "/",
    element: <GlobalLayout />,
      children: [
        {
          element: <HomePage toDoList={toDoList}/>,
          index: true
        },
      ],
    },
  ]);

  useEffect(()=>{
    const fetchMockTodos = async () => {
      const result = await fetch(`${urlEndpoint}/mocktodos/all`);
      const fetchedMockTodos = await result.json();

      setToDoList(fetchedMockTodos.todo)
    }
    fetchMockTodos()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
       <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
