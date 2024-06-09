import React from 'react'

import styles from './card.module.scss';
import Image from 'next/image';

type Props = {}

const Card = (props: Props) => {
  return (
    <div className={styles.card}>
      <Image
        src="/avatar.png"
        alt="logo"
        width={150}
        height={150}
      />
      <h4>K. Minai</h4>
      <p>Chief Queef</p>
    </div>
  )
}

export default Card;