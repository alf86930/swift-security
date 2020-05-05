import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../layout'
import Modal from '../../components/modal'
import VaultForm from '../../components/vault-form'
import VaultContent, { VaultData } from '../../components/vault-content'
import PartnersBanner from '../../components/partners-banner'

import useNoScroll from '../../useNoScroll'

const { useState, useRef } = React

const SecureVaultPage = ({ data: { allContentfulVault } }) => {
  const [vault, setVault] = useState<VaultData | null | 'not found'>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const formNode = useRef<HTMLElement>(null)
  const contentNode = useRef<HTMLDivElement>(null)

  const vaults = allContentfulVault.nodes

  useNoScroll(isModalVisible)

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
      setIsModalVisible(true)
    }, 900)
  }

  const handleModalClose = () => {
    if (contentNode.current) {
      const formHeight = formNode.current?.getBoundingClientRect().top
      const contentHeight = contentNode.current.getBoundingClientRect().top

      setIsModalVisible(false)

      window.scrollTo({
        top: contentHeight - formHeight,
        behavior: 'smooth',
      })
    }
  }

  return (
    <Layout title="Access Your Secure Vault">
      {isModalVisible && vault !== 'not found' && (
        <Modal owner={vault.owner} onClose={handleModalClose} />
      )}

      <VaultForm ref={formNode} handleSubmit={handleSubmit} />
      <VaultContent ref={contentNode} vault={vault} isLoading={isLoading} />

      <PartnersBanner />
    </Layout>
  )
}

export const query = graphql`
  query {
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
