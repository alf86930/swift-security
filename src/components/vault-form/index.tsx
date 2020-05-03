import * as React from 'react'

import styles from './index.module.scss'

const { useState } = React

interface VaultFormProps {
  handleSubmit: (code: string) => void
}

const VaultForm: React.FC<VaultFormProps> = ({ handleSubmit }) => {
  const [vaultNumber, setVaultNumber] = useState('SGD/XXX/893/17')

  const onSubmit = e => {
    e.preventDefault()

    handleSubmit(vaultNumber)
    setVaultNumber('')
  }

  return (
    <section className={styles.container}>
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

export default VaultForm
