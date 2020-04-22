import * as React from 'react'
import Img from 'gatsby-image'
import styles from './hero.module.scss'

type HeroProps = {
  bg: any
  content: React.ReactNode
  imageAlt: string
  size?: string
}

const heroSizes = {
  large: styles.hero,
  small: styles.heroSmall,
}

const Hero: React.FC<HeroProps> = ({
  bg,
  content,
  imageAlt,
  size = 'large',
}) => {
  return (
    <div className={heroSizes[size]}>
      <Img className={styles.heroBg} fluid={bg.fluid} alt={imageAlt} />

      {content}
    </div>
  )
}

export default Hero
