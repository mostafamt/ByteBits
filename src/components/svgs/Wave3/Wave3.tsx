import React from 'react'

import styles from './wave3.module.scss';
import Image from 'next/image';

type Props = {}

const Wave3 = (props: Props) => {
    return (
        <div className={styles["wave-box"]}>
            <Image src="/wave3.svg" alt="logo" width={100} height={100} />
        </div>
    );
}

export default Wave3;