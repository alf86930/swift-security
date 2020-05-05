import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../layout'
import VaultForm from '../../components/vault-form'
import VaultContent, { VaultData } from '../../components/vault-content'
import PartnersBanner from '../../components/partners-banner'

const { useState } = React

const SecureVaultPage = ({ data: { allContentfulVault } }) => {
  const [vault, setVault] = useState<VaultData | null | 'not found'>(null)
  const [isLoading, setIsLoading] = useState(false)

  const vaults = allContentfulVault.nodes

  const handleSubmit = (code: string) => {
    event.preventDefault()

    setIsLoading(true)

    setTimeout(() => {
      const data = vaults.filter(v => v.vault.code === code)[0]

      if (!data) {
        setVault('not found')
        setIsLoading(false)
        return
      }

      setVault(data.vault)
      setIsLoading(false)
    }, 900)
  }

  return (
    <Layout title="Access Your Secure Vault">
      <VaultForm handleSubmit={handleSubmit} />
      <VaultContent vault={vault} isLoading={isLoading} />

      <PartnersBanner />
    </Layout>
  )
}

export const query = graphql`
  query FetchVaults {
    allContentfulVault {
      nodes {
        vault {
          code
          date
          description
          owner
          worth
        }
      }
    }
  }
`

export default SecureVaultPage
