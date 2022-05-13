import React from "react";
import styles from "./AddButton.module.css";
export default function AddButton() {
  return (
    <div style={{ display: "flex", margin: "10px auto" }}>
      <button
        type="button"
        style={{ backgroundColor: "#7952b3", color: "#fff" }}
        className={`btn  ${styles.addButton}`}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        Add New Task
      </button>
    </div>
  );
}
