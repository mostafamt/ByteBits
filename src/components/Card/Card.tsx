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
        width={200}
        height={200}
      />
      <h4>K. Minai</h4>
      <p>Chief Queef</p>
    </div>
  )
}

export default Card;