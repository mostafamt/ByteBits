import Image from 'next/image';
import React from 'react'

import styles from './teamIcon.module.scss';

type Props = {}

const TeamIcon = (props: Props) => {
  return (
    <div className={styles["icon-box"]}>
      <Image src="/sammy-line-woman-shaking-hands-with-new-employee 1.svg" alt="team" width={100} height={100} />
    </div>
  )
}

export default TeamIcon;