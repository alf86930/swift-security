import * as React from 'react'

import Layout from '../../layout'
import VaultForm from '../../components/vault-form'
import VaultContent from '../../components/vault-content'
import PartnersBanner from '../../components/partners-banner'

import { vaults } from '../../data-components/fixtures'

const { useState } = React

const SecureVaultPage = () => {
  const [vault, setVault] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (code: string) => {
    event.preventDefault()

    setIsLoading(true)

    setTimeout(() => {
      const result = vaults[code]

      if (!result) {
        setVault('not found')
        setIsLoading(false)
        return
      }

      setVault(result)
      setIsLoading(false)
    }, 900)
  }

  return (
    <Layout title="Track your package">
      <VaultForm handleSubmit={handleSubmit} />
      <VaultContent vault={vault} isLoading={isLoading} />

      <PartnersBanner />
    </Layout>
  )
}

export default SecureVaultPage
