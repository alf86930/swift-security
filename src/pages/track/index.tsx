import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../layout'
import TrackForm from '../../components/track-form'
import TrackResult from '../../components/track-result'
import PartnersBanner from '../../components/partners-banner'

import { Result } from '../../components/track-result/interfaces'

const { useState } = React

const TrackPage = ({ data }) => {
  const [item, setItem] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const packages = data.allContentfulTrackingPackagePackageJsonNode.nodes

  const handleSubmit = (code: string) => {
    event.preventDefault()

    setIsLoading(true)

    setTimeout(() => {
      const result: Result = packages.filter(p => p.item.code === code)[0]

      if (!result) {
        setItem('not found')
        setIsLoading(false)
        return
      }

      setItem(result)
      setIsLoading(false)
    }, 900)
  }

  return (
    <Layout title="Track your package">
      <TrackForm handleSubmit={handleSubmit} />

      <TrackResult result={item} isLoading={isLoading} />

      <PartnersBanner />
    </Layout>
  )
}

export const query = graphql`
  query FetchAllPackages {
    allContentfulTrackingPackagePackageJsonNode {
      nodes {
        item {
          code
          currentLocation {
            lat
            lng
            text
          }
          eta
          sendDate
          price
        }
        sender {
          name
        }
        history {
          code
          date
          comment
          leg
          location
          status
        }
      }
    }
  }
`

export default TrackPage
