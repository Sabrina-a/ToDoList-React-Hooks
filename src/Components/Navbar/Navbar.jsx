import React, { Fragment } from "react";
import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <Fragment>
      <nav className="navbar navbar-light " style={{ background: "lightgray" }}>
        <div className="container-fluid">
          <p className={`  ${styles.toDoList}`}>To Do List</p>
        </div>
      </nav>
    </Fragment>
  );
}
