import Image from "next/image";
import React from "react";

import styles from "./book.module.scss";
import Wave5 from "../svgs/Wave5/Wave5";

type Props = {};

const Book = (props: Props) => {
  return (
    <div className={styles.book}>
      <Wave5 />
      <div className="container">
        <div>
          <div>
            <Image src={"/book.svg"} alt="book" width={400} height={400} />
          </div>
          <div>
            <p>"Ready to elevate your business?"</p>
            <button>
              <span>Book</span> a meeting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
