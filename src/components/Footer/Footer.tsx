'use client';
import React from 'react'

import styles from './footer.module.scss';
import Image from 'next/image';
import Wave3 from '../svgs/Wave3/Wave3';
import Wave4 from '../svgs/Wave4/Wave4';
import { usePathname } from 'next/navigation';
import TeamIcon from '../svgs/TeamIcon/TeamIcon';
import BinaryDigits from '../BinaryDigits/BinaryDigits';

type Props = {}

const Footer = (props: Props) => {
  const pathname = usePathname();

  return (
    <>
      <div style={{ margin: '0rem 0', height: '12rem' }}></div>
      <div className={styles.footer} >
        <BinaryDigits mode="dark" footer={true} />
        <div className="container">
          <Image
            src="/light-logo.svg"
            alt="logo"
            width={250}
            height={64}
          />
        </div>
        <Wave3 />
        <Wave4 />
        { pathname === '/team' && <TeamIcon /> }
      </div>
    </>
  )
}

export default Footer;