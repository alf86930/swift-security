import * as React from 'react'
import moment from 'moment'

import styles from './index.module.scss'

const PackageContent = ({ item }) => {
  const itemSendDate = moment(new Date(item.sendDate)).format('LL')
  const itemETA = moment(new Date(item.eta)).format('LL')
  const itemPrice = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'EUR',
  }).format(item.price)

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Package details</h2>

      <p className={styles.p}>Sent by: {item.name}</p>
      <p className={styles.p}>Sent on: {itemSendDate}</p>
      <p className={styles.p}>Estimated arrival date: {itemETA}</p>

      <p className={styles.price}>Worth of item: {itemPrice}</p>
    </div>
  )
}

export default PackageContent
