import * as React from 'react'
import { Puff } from 'svg-loaders-react'

import MapIcon from '../../assets/icons/MapIcon'
import { Result } from './interfaces'
import styles from './index.module.scss'

export interface TrackResultProps {
  result: Result | null
  isLoading: boolean
}

const TrackResult: React.FC<TrackResultProps> = ({ result, isLoading }) => {
  if (isLoading)
    return (
      <div className={styles.containerEmpty}>
        <Puff stroke="#00377c" fill="#00377c" />
      </div>
    )

  if (!result)
    return (
      <div className={styles.containerEmpty}>
        <MapIcon className={styles.containerEmptyIcon} />
        <h3 className={styles.containerEmptyInfo}>
          Input a tracking code to see the current location of your package
        </h3>
      </div>
    )

  const renderPackageHistory = () => {
    const timelineClassname = (index: number, length: number) =>
      index === 0
        ? styles.timelineFirst
        : index === length
        ? styles.timelineLast
        : styles.timeline

    return result.history.map((historyItem, i) => (
      <div className={styles.history} key={historyItem.code}>
        <span className={timelineClassname(i, result.history.length - 1)} />

        <p className={styles.historyComment}>{historyItem.comment}</p>
        <p className={styles.historyLocation}>{historyItem.location}</p>
        <p className={styles.historyDate}>{historyItem.date.toDateString()}</p>
      </div>
    ))
  }

  return (
    <section className={styles.container}>
      <div className={styles.historyContainer}>
        <h2 className={styles.h2}>History</h2>
        {renderPackageHistory()}
      </div>
    </section>
  )
}

export default TrackResult
