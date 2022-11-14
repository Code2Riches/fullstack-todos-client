import {useState, useEffect} from "react";
import GlobalLayout from "./Layouts/GlobalLayout";
// import NavBar from "./Components/NavBar";
// import ToDoCard from "./Components/ToDoCard";
import HomePage from "./Pages/HomePage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ToDoFormPage from "./Pages/ToDoFormPage";
import './App.css';

const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [refetch, setRefetch] = useState(false);

  useEffect(()=>{
    const fetchToDos = async () => {
      const result = await fetch(`${urlEndpoint}/todos/all`);
      const fetchedToDos = await result.json();

      setToDoList(fetchedToDos.todo)
    }
    fetchToDos()
  }, [refetch])

  const router = createBrowserRouter([
    {
    path: "/",
    element: <GlobalLayout />,
      children: [
        {
          element: <HomePage toDoList={toDoList} urlEndpoint={urlEndpoint} refetch={setRefetch} />,
          index: true
        },
        {
          path: "/todo-form",
          element: <ToDoFormPage urlEndpoint={urlEndpoint} refetch={setRefetch} />
          
        }
        // element: <ToDoFormPage urlEndpoint={urlEndpoint} ToDoFormItem={ToDoFormItem} />
      ],
    },
  ]);

  return (
    <header className="App-header">
      <div className="App">
        <RouterProvider router={router} />
      </div> 
    </header>
  );
}

export default App;
