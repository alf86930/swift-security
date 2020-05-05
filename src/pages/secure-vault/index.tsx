import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../layout'
import VaultForm from '../../components/vault-form'
import VaultContent, { VaultData } from '../../components/vault-content'
import PartnersBanner from '../../components/partners-banner'

const { useState } = React

const SecureVaultPage = ({ data }) => {
  const [vault, setVault] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const vaults: VaultData[] = data.allContentfulVaultVaultJsonNode.nodes

  console.log(vaults)

  const handleSubmit = (code: string) => {
    event.preventDefault()

    setIsLoading(true)

    setTimeout(() => {
      const result = vaults.filter(v => v.code === code)[0]

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

export const query = graphql`
  query FetchVaults {
    allContentfulVaultVaultJsonNode {
      nodes {
        code
        owner
        date
        description
        worth
      }
    }
  }
`

export default SecureVaultPage
