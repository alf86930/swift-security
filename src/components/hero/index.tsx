import * as React from 'react'
import Img from 'gatsby-image'
import styles from './hero.module.scss'

type HeroProps = {
  bg: any
  content: React.ReactNode
  imageAlt: string
}

const Hero: React.FC<HeroProps> = ({ bg, content, imageAlt }) => {
  return (
    <div className={styles.hero}>
      <Img className={styles.heroBg} fluid={bg.fluid} alt={imageAlt} />

      {content}
    </div>
  )
}

export default Hero
