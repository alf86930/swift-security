import * as React from 'react'

import VaultIMG from '../../assets/images/home-vault-two.jpg'
import styles from './vault-info.module.scss'

const VaultInfo = () => {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.vaultImg} src={VaultIMG} alt="A metal vault" />
      </div>

      <p className={styles.vaultDescription}>
        With own warehouse package, you can store your valuable items, ranging
        from the important documents in safe deposits, to gold bullion in
        special gold deposits and other treasure deposits.
        <br /> <br />
        We are specialized in Vault Security, Safe Deposits, Gold Deposits,
        Treasures, logistic solutions, customs clearance, freight forwarding,
        in-land freight, air import and export from to across the world.
      </p>
    </div>
  )
}

export default VaultInfo
