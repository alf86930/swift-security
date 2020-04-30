import * as React from 'react'
import moment from 'moment'

import Timeline from '../timeline'

import styles from './index.module.scss'

const PackageHistory = ({ historyItem, index, totalCount }) => {
  const itemDate = moment(historyItem.date).format('dddd, MMMM Do YYYY')

  return (
    <div className={styles.history} key={historyItem.code}>
      <Timeline index={index} length={totalCount} />

      <p className={styles.historyComment}>{historyItem.comment}</p>
      <p className={styles.historyLocation}>{historyItem.location}</p>
      <p className={styles.historyDate}>{itemDate}</p>
    </div>
  )
}

export default PackageHistory
