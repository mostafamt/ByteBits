import React from 'react'
import Image from 'next/image';

import styles from './wave5.module.scss';

type Props = {}

const Wave5 = (props: Props) => {
  return (
    <div className={styles["wave-box"]}>
      <Image src="/wave5.svg" alt="logo" width={100} height={100} />
    </div>
  );
}

export default Wave5;