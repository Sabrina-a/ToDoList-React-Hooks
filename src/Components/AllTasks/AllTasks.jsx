import React from "react";
import SendTaskForm from "../SendTaskForm/SendTaskForm";
import Task from "../Task/Task";

export default function AllTasks({ tasks }) {
  const listOfTasks = tasks.map(({ id, ...otherProps }) => (
    <Task key={id} {...otherProps} id={id} />
  ));
  return <div>{listOfTasks}</div>;
}
