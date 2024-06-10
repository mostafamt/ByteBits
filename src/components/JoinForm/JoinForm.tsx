import React from "react";

import styles from "./joinForm.module.scss";

type Props = {};

const JoinForm = (props: Props) => {
  return (
    <form className={styles["join-form"]}>
      <div className={styles["col-2"]}>
        <div className={styles["form-control"]}>
          <label htmlFor="first-name">First Name</label>
          <input type="text" name="first-name" id="first-name" />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="last-name">Last Name</label>
          <input type="text" name="last-name" id="last-name" />
        </div>
      </div>
      <div>
        <div className={styles["form-control"]}>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
      </div>
      <div className={styles["col-2"]}>
        <div className={styles["form-control"]}>
          <label htmlFor="education">Education</label>
          <input type="text" name="education" id="education" />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="position">Position</label>
          <input type="text" name="position" id="position" />
        </div>
      </div>
      <div className={styles["col-2"]}>
        <div className={styles["form-control"]}>
          <label htmlFor="phone">Phone</label>
          <input type="text" name="phone" id="phone" />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="gender">Gender</label>
          <input type="text" name="gender" id="gender" />
        </div>
      </div>

      <div className={styles.submit}>
        <button type="submit">Join</button>
      </div>
    </form>
  );
};

export default JoinForm;
