import React from 'react'

import styles from './process.module.scss';

type Props = {}

const Process = (props: Props) => {
  return (
    <div className={styles.process} >
      <div className="container">
        <h2>Our process</h2>
        <div>
          <div>
            <h3>Meet with you</h3>
            <p>Gather requirements, understand your needs, and clarify any ambiguities. </p>
          </div>
          <div>
            <h3>Meet with you</h3>
            <p>Gather requirements, understand your needs, and clarify any ambiguities. </p>
          </div>
          <div>
            <h3>Meet with you</h3>
            <p>Gather requirements, understand your needs, and clarify any ambiguities. </p>
          </div>
          <div>
            <h3>Meet with you</h3>
            <p>Gather requirements, understand your needs, and clarify any ambiguities. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process;