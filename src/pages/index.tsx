import * as React from 'react'

// components
import Layout from '../layout'
import Hero from '../components/hero'
import ServicesIcons from '../components/services-icons'
import ServicesCTA from '../components/services-cta'
import VaultInfo from '../components/vault-info'
import PartnersBanner from '../components/partners-banner'

// data components
import {
  heroOneContent,
  heroOneDesktopContent,
  heroTwoContent,
  heroTwoDesktopContent,
  heroThreeContent,
  heroThreeDesktopContent,
  heroFourContent,
  heroFourDesktopContent,
  heroFiveContent,
  heroFiveDesktopContent,
} from '../data-components/index-data'
import Slideshow from '../components/slideshow'
import Testimonials from '../components/testimonials'

const IndexPage = () => {
  return (
    <Layout title="Home">
      <Slideshow content={heroOneContent} contentLg={heroOneDesktopContent} />

      <ServicesIcons />

      <VaultInfo />

      <Hero
        id="home-ship-one"
        content={heroTwoContent}
        lgContent={heroTwoDesktopContent}
      />

      <ServicesCTA />

      <Hero
        id="home-plane-one"
        content={heroThreeContent}
        lgContent={heroThreeDesktopContent}
      />

      <Hero
        id="home-truck-one"
        content={heroFourContent}
        lgContent={heroFourDesktopContent}
      />

      <Testimonials />

      <Hero
        id="home-woman-one"
        content={heroFiveContent}
        lgContent={heroFiveDesktopContent}
      />

      <PartnersBanner />
    </Layout>
  )
}

export default IndexPage
