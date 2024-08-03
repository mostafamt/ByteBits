import React from "react";

import styles from "./talk.module.scss";
import Image from "next/image";
import Form from "../Form/Form";

type Props = {};

const Talk = (props: Props) => {
  return (
    <div className="container">
      <div className={styles.talk}>
        <div>
          <p className={styles.talk_header}>Talk to us!</p>
          <Image className={styles.img} src="/talk.svg" alt="talk" width={400} height={400} />
          <div>
            <p className={styles.title}>
              Fill the form
              <br /> or <span>contact us</span> externally
            </p>
            <ul>
              <li>
                <Image src="/whatsapp.svg" alt="whatsapp" width={30} height={30} />
                <p>+90538 420 69 69</p>
              </li>
              <li>
                <Image src="/message.svg" alt="message" width={30} height={30} />
                <p>contact@bytebits.io</p>
              </li>
            </ul>
          </div>

          <div>
            <Image className={styles.line} src="/line.svg" alt="line" width={400} height={100} />
          </div>

          <div>
            <p className={styles.title}>Find us on:</p>
            <ul>
              <li>
                <Image src="/linkedin.svg" alt="linkedin" width={30} height={30} />
                <p>@ByteBits</p>
              </li>
              <li>
                <Image src="/instagram.svg" alt="instagram" width={30} height={30} />
                <p>@ByteBitsOfficial</p>
              </li>
              <li>
                <Image src="/x.svg" alt="x" width={30} height={30} />
                <p>@ByteBitsOfficial</p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Talk;
