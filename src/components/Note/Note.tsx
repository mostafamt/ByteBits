import React from 'react'

import styles from './note.module.scss';

type Props = {
    children: React.ReactNode
}

const Note = (props: Props) => {
    const {children} = props;
  return (
    <div className={styles.note} >{children}</div>
  )
}

export default Note;