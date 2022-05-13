import React from "react";
import SendTaskForm from "../SendTaskForm/SendTaskForm";

export default function Modal() {
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                New Task
              </h5>
              <button
                style={{ backgroundColor: "#7952b3", color: "#fff" }}
                type="button"
                className="btn btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                X
              </button>
            </div>
            <div className="modal-body">
              {/* <form></form> */}
              {/* <SendTaskForm addNewTaskHandler={addNewTaskHandler} /> */}
              <SendTaskForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
