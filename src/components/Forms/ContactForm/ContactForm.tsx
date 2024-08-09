"use client";
import React from "react";
import { useForm } from "react-hook-form";
import FormControl from "../FormControl/FormControl";

import styles from "./contactForm.module.scss";

type Props = {};

const Form = (props: Props) => {
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
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
      <FormControl
        label="Email"
        name="email"
        element="input"
        type="email"
        register={register}
        error={errors["email"]}
      />
      <FormControl
        label="Phone Number"
        name="phone-number"
        element="input"
        register={register}
        error={errors["phone-number"]}
      />
      <FormControl
        label="Subject"
        name="subject"
        element="input"
        register={register}
        error={errors["subject"]}
      />
      <FormControl
        label="Message"
        name="message"
        element="input"
        register={register}
        error={errors["message"]}
      />

      <div className={styles.submit}>
        <button type="submit">send</button>
      </div>
    </form>
  );
};

export default Form;
