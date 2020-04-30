import * as React from 'react'

import { Puff } from 'svg-loaders-react'

import styles from './index.module.scss'

const Loader = () => (
  <div className={styles.container}>
    <Puff stroke="#00377c" fill="#00377c" />
  </div>
)

export default Loader
