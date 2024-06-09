import Image from 'next/image';
import React from 'react'

import styles from './getBussiness.module.scss';

type Props = {}

const GetBussiness = (props: Props) => {
  return (
    <div className='container'>
      <div className={styles['get-bussiness']} >
        <div>
          <h2>Get your business running online.</h2>
          <button>Become a <span>client</span> </button>
        </div>
        <div>
          <Image
            src="/sammy-line-18 1.svg"
            alt="logo"
            width={600}
            height={600}
          />
        </div>
      </div>

    </div>
  )
}

export default GetBussiness;