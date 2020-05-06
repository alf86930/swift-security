import * as React from 'react'

import styles from './index.module.scss'

const { useState } = React

interface VaultFormProps {
  forwardedRef?: React.MutableRefObject<HTMLElement>
  handleSubmit: (code: string) => void
}

const VaultForm: React.FC<VaultFormProps> = ({
  forwardedRef,
  handleSubmit,
}) => {
  const [vaultNumber, setVaultNumber] = useState('')

  const onSubmit = e => {
    e.preventDefault()

    handleSubmit(vaultNumber)
    setVaultNumber('')
  }

  return (
    <section className={styles.container} ref={forwardedRef}>
      <div className={styles.info}>
        <p className={styles.introText}>
          Enter your secure vault number to access the contents of your vault
        </p>

        <form className={styles.inputContainer} onSubmit={onSubmit}>
          <label className={styles.label} htmlFor="vault-number">
            Vault Number
          </label>
          <input
            className={styles.input}
            type="text"
            value={vaultNumber}
            onChange={e => setVaultNumber(e.target.value)}
            id="vault-number"
            placeholder="Enter your vault number"
          />

          <button className={styles.submit} type="submit">
            Access vault
          </button>
        </form>
      </div>
    </section>
  )
}

const RefVaultForm = React.forwardRef((props: VaultFormProps, ref: any) => (
  <VaultForm forwardedRef={ref} {...props} />
))

export default RefVaultForm
