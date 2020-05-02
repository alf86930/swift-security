import * as React from 'react'

import Layout from '../../layout'
import TrackForm from '../../components/track-form'
import TrackResult from '../../components/track-result'
import PartnersBanner from '../../components/partners-banner'

import { results } from '../../data-components/fixtures'

const { useState } = React

const Track = () => {
  const [item, setItem] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (code: string) => event => {
    event.preventDefault()

    setIsLoading(true)

    setTimeout(() => {
      const result = results[code]

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

export default Track
