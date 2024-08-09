"use client";
import React from "react";

import styles from "./joinForm.module.scss";
import { useForm } from "react-hook-form";
import FormControl from "../FormControl/FormControl";

type Props = {};

const JoinForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  console.log("errors= ", errors);

  const onSubmit = (values: any) => {
    alert(JSON.stringify(values, null, 4));
  };

  return (
    <form className={styles["join-form"]} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles["col-2"]}>
        <FormControl
          label="First Name"
          name="first-name"
          element="input"
          type="text"
          register={register}
          error={errors["first-name"]}
        />
        <FormControl
          label="Last Name"
          name="last-name"
          element="input"
          type="text"
          register={register}
          error={errors["last-name"]}
        />
      </div>
      <div>
        <FormControl
          label="Email"
          name="email"
          element="input"
          type="email"
          register={register}
          error={errors["email"]}
        />
      </div>
      <div className={styles["col-2"]}>
        <FormControl
          label="Education"
          name="education"
          element="input"
          type="text"
          register={register}
          error={errors["education"]}
        />
        <FormControl
          label="Position"
          name="position"
          element="input"
          type="text"
          register={register}
          error={errors["position"]}
        />
      </div>
      <div className={styles["col-2"]}>
        <FormControl
          label="Phone"
          name="phone"
          element="input"
          type="text"
          register={register}
          error={errors["phone"]}
        />
        <FormControl
          label="Gender"
          name="gender"
          element="input"
          type="text"
          register={register}
          error={errors["gender"]}
        />
      </div>

      <div className={styles.submit}>
        <button type="submit">Join</button>
      </div>
    </form>
  );
};

export default JoinForm;
