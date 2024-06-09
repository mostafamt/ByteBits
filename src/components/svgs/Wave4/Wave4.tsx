import React from 'react'
import Image from 'next/image';

import styles from './wave4.module.scss';

type Props = {}

const Wave4 = (props: Props) => {
  return (
    <div className={styles["wave-box"]}>
      <Image src="/wave4.svg" alt="logo" width={100} height={100} />
    </div>
  );
}

export default Wave4;