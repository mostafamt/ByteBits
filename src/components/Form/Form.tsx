import React from "react";

import styles from "./form.module.scss";

type Props = {};

const Form = (props: Props) => {
  return (
    <form className={styles.form}>
      <div>
        <label htmlFor="first-name">first name</label>
        <input type="text" name="first-name" id="first-name" />
      </div>
      <div>
        <label htmlFor="last-name">last name</label>
        <input type="text" name="last-name" id="last-name" />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="phone-number">phone number</label>
        <input type="text" name="phone-number" id="phone-number" />
      </div>
      <div>
        <label htmlFor="subject">subject</label>
        <input type="text" name="subject" id="subject" />
      </div>
      <div>
        <label htmlFor="message">message</label>
        <textarea name="message" id="message" cols={30}></textarea>
      </div>

      <div className={styles.submit}>
        <button type="submit">send</button>
      </div>
    </form>
  );
};

export default Form;
