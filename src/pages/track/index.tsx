import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../layout'
import TrackForm from '../../components/track-form'
import TrackResult from '../../components/track-result'
import PartnersBanner from '../../components/partners-banner'

import { Result } from '../../components/track-result/interfaces'

const { useState } = React

const TrackPage = ({ data: { allContentfulPackage }, location }) => {
  const [item, setItem] = useState<Result | null | 'not found'>(null)
  const [isLoading, setIsLoading] = useState(false)

  const packages = allContentfulPackage.nodes

  const handleSubmit = (code: string) => {
    event.preventDefault()

    setIsLoading(true)

    setTimeout(() => {
      const result = packages.filter(p => p.package.item.code === code)[0]

      if (!result) {
        setItem('not found')
        setIsLoading(false)
        return
      }

      setItem(result.package)
      setIsLoading(false)
    }, 900)
  }

  const defaultTrackingCode =
    location && location.state ? location.state.trackingCode : ''

  return (
    <Layout title="Track your package">
      <TrackForm
        defaultCode={defaultTrackingCode}
        handleSubmit={handleSubmit}
      />

      <TrackResult result={item} isLoading={isLoading} />

      <PartnersBanner />
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulPackage {
      nodes {
        package {
          item {
            code
            price
            sendDate
            eta
            currentLocation {
              lat
              lng
              text
            }
          }
          sender {
            name
          }
          history {
            code
            comment
            date
            leg
            location
            status
          }
        }
      }
    }
  }
`

export default TrackPage
