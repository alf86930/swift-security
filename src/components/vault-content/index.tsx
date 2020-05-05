import * as React from 'react'
import moment from 'moment'

import Loader from '../loader'
import VaultEmpty from '../vault-empty'

import styles from './index.module.scss'

export interface VaultData {
  code: string
  owner: string
  date: Date
  description: string
  worth: number
}

interface VaultContentProps {
  forwardedRef?: React.MutableRefObject<HTMLDivElement>
  isLoading: boolean
  vault: VaultData | null | 'not found'
}

const VaultContent: React.FC<VaultContentProps> = ({
  forwardedRef,
  isLoading,
  vault,
}) => {
  if (isLoading) return <Loader />

  if (vault === null || vault === 'not found')
    return <VaultEmpty type={vault} />

  const vaultDate = moment(new Date(vault.date)).format('LL')
  const vaultWorth = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'EUR',
  }).format(vault.worth)

  return (
    <div className={styles.container} ref={forwardedRef}>
      <h2 className={styles.h2}>Vault Content</h2>

      <p className={styles.p}>Vault Owner: {vault.owner}</p>
      <p className={styles.p}>Vault Content: {vault.description}</p>
      <p className={styles.p}>Deposited on: {vaultDate}</p>
      <p className={styles.p}>Vault Transaction Code: {vault.code}</p>

      <p className={styles.worth}>
        <span>{vaultWorth}</span> Total worth
      </p>

      <a
        className={styles.a}
        href="mailto:swiftpackagedelivery@fastservice.com"
      >
        For more information, click here to contact us
      </a>
    </div>
  )
}

const RefVaultContent = React.forwardRef(
  (props: VaultContentProps, ref: any) => (
    <VaultContent forwardedRef={ref} {...props} />
  )
)

export default RefVaultContent
