import * as React from 'react'

import SearchErrorIcon from '../../assets/icons/SearchErrorIcon'
import MapIcon from '../../assets/icons/MapIcon'

import styles from './index.module.scss'

interface TrackingEmptyProps {
  type: any
}

const TrackingEmpty: React.FC<TrackingEmptyProps> = ({ type }) => (
  <div className={styles.container}>
    {type === 'not found' ? (
      <>
        <SearchErrorIcon className={styles.containerIcon} />

        <h3 className={styles.containerInfo}>
          No package found with that tracking code. Please try again.
        </h3>
      </>
    ) : (
      <>
        <MapIcon className={styles.containerIcon} />

        <h3 className={styles.containerInfo}>
          Input a tracking code to see the current location of your package.
        </h3>
      </>
    )}
  </div>
)

export default TrackingEmpty
