import AddButton from "../Components/AddButton/AddButton";
import Modal from "../Components/Modal/Modal";
import Navbar from "../Components/Navbar/Navbar";
import AllTasks from "../Components/AllTasks/AllTasks";
import SendTaskForm from "../Components/SendTaskForm/SendTaskForm";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState([
    { id: 0, title: "title1", description: "description1" },
    { id: 2, title: "title2", description: "description2" },
    { id: 3, title: "title3", description: "description3" },
    { id: 4, title: "title4", description: "description4" },
  ]);
  // console.log(data);
  const addNewTaskHandler = (data) => {
    // console.log(data);
    setData((prevState) => setData([...prevState, data]));
  };

  const RenderTasks = () => {
    return data;
  };

  return (
    <div className="App">
      <Navbar />
      {/* {data.map((item) => (
        <div></div>
      ))} */}
      <AllTasks tasks={RenderTasks()} />
      <AddButton />
      {/* <SendTaskForm addNewTaskHandler={addNewTaskHandler} /> */}
      <Modal />
    </div>
  );
}

export default App;
