import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { LuAlertCircle } from "react-icons/lu";

import styles from "./formControl.module.scss";

type Props = {
  name: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  error: any;
  element: string;
  type?: string;
};

const FormControl = (props: Props) => {
  const { name, label, register, error, element, type } = props;

  const renderElement = (element: string) => {
    let el = <></>;
    if (element === "input") {
      el = (
        <input
          type={type}
          id="first-name"
          {...register(name, { required: `${label} is required` })}
          style={{
            borderColor: error ? "red" : "#ccc",
          }}
        />
      );
    } else if (element === "textarea") {
      el = (
        <textarea
          id="message"
          cols={30}
          {...register("message", { required: `${label} is required` })}
        ></textarea>
      );
    }

    return el;
  };

  return (
    <div className={styles["form-control"]}>
      <label htmlFor={name}>{label}</label>
      {renderElement(element)}
      {error && (
        <p className={styles.error} role="alert">
          <LuAlertCircle /> {error.message?.toString()}
        </p>
      )}
    </div>
  );
};

export default FormControl;
