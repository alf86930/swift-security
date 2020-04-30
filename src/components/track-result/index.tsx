import * as React from 'react'

// components
import Loader from '../loader'
import TrackingEmpty from '../tracking-empty'

// images
import mapImg from '../../assets/images/map.webp'

// interfaces
import { Result } from './interfaces'

// styles
import styles from './index.module.scss'
import PackageHistory from '../package-history'
import PackageContent from '../package-content'

export interface TrackResultProps {
  result: Result | null
  isLoading: boolean
}

const TrackResult: React.FC<TrackResultProps> = ({ result, isLoading }) => {
  if (isLoading) return <Loader />

  if (!result) return <TrackingEmpty />

  const renderPackageHistory = () => (
    <>
      <h2 className={styles.h2}>History</h2>
      {result.history.map((historyItem, i) => (
        <PackageHistory
          historyItem={historyItem}
          index={i}
          totalCount={result.history.length - 1}
        />
      ))}
    </>
  )

  const renderPackageContent = () => (
    <PackageContent item={{ ...result.item, name: result.sender.name }} />
  )

  return (
    <section className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          className={styles.trackImg}
          src={mapImg}
          alt="Current package location"
        />
        <div className={styles.boxShadow} />
      </div>

      <div className={styles.historyContainer}>{renderPackageHistory()}</div>
      {renderPackageContent()}
    </section>
  )
}

export default TrackResult
