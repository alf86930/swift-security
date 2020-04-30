import * as React from 'react'

import MapIcon from '../../assets/icons/MapIcon'

import styles from './index.module.scss'

const TrackingEmpty = () => (
  <div className={styles.container}>
    <MapIcon className={styles.containerIcon} />

    <h3 className={styles.containerInfo}>
      Input a tracking code to see the current location of your package
    </h3>
  </div>
)

export default TrackingEmpty
