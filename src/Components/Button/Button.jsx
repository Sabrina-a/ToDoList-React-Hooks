import React, { Fragment, useEffect, useState } from "react";
import styles from "./Button.module.css";

const Button = function (props) {
  const [styleClass, setStyleClass] = useState("");
  useEffect(() => {
    if (props.children === "Delete") {
      setStyleClass("btn-danger");
    } else if (props.children === "Update") {
      setStyleClass("btn-warning");
    }
  }, [props.children]);

  return (
    <Fragment>
      {props.children && (
        <button
          type={props.type}
          className={`${styleClass} ${styles.button}`}
          onClick={props.onClick}
        >
          {props.children}
        </button>
      )}
    </Fragment>
  );
};
export default Button;
