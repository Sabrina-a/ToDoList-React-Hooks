import React, { useState } from "react";
import Form from "../Form/Form";
// import Button from "../Layout/Button";

const SendTaskForm = ({ addNewTaskHandler, closeModal }) => {
  const [input, setInput] = useState({
    title: "",
    description: "",
  });

  const inputHandler = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    setInput((prevState) => {
      // console.log(prevState);
      return { ...prevState, [key]: value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(input);
    addNewTaskHandler({
      id: Math.round(Math.random() * 99),
      title: input.title,
      description: input.description,
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Form.Controller>
        <div className="mb-3">
          <label htmlFor="recipient-name" className="col-form-label">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="recipient-name"
            required
            onChange={inputHandler}
          />
        </div>
      </Form.Controller>
      <Form.Controller>
        <div className="mb-3">
          <label htmlFor="message-text" className="col-form-label">
            Description:
          </label>
          <input
            className="form-control"
            id="message-text"
            onChange={inputHandler}
            required
          ></input>
        </div>
      </Form.Controller>

      <div style={{ margin: "20px" }}>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            style={{ backgroundColor: "#7952b3", color: "#fff" }}
            type="submit"
            className="btn btn-primary"
          >
            Send Task
          </button>
        </div>
      </div>
    </form>
  );
};

export default SendTaskForm;
