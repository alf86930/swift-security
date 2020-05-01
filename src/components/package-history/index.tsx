import * as React from 'react'
import moment from 'moment'

import Timeline from '../timeline'

import styles from './index.module.scss'
import { Result } from '../track-result/interfaces'

interface PackageHistoryProps {
  item: Result
}

const PackageHistory: React.FC<PackageHistoryProps> = ({ item }) => {
  const renderPackageHistory = () =>
    item.history.map((historyItem, i) => {
      const itemDate = moment(historyItem.date).format('dddd, MMMM Do YYYY')

      return (
        <div className={styles.history} key={historyItem.code}>
          <Timeline index={i} length={item.history.length - 1} />

          <p className={styles.historyComment}>{historyItem.comment}</p>
          <p className={styles.historyLocation}>{historyItem.location}</p>
          <p className={styles.historyDate}>{itemDate}</p>
        </div>
      )
    })

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Package History</h2>

      {renderPackageHistory()}
    </div>
  )
}

export default PackageHistory
