import React, { Fragment } from "react";
import Button from "../Button/Button";
import styles from "./Task.module.css";
export default function Task({ id, title, description }) {
  return (
    <Fragment>
      <div
        className={`accordion ${styles.parentDiv} `}
        id="accordionExample"
        // style={style}
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {title}
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>{description}</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item"></div>
        <div className="btns">
          <Button type="button">Delete</Button>
          <Button type="button">Update</Button>
        </div>
      </div>
    </Fragment>
  );
}
