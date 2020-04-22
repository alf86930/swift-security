import * as React from 'react'
import Img from 'gatsby-image'
import styles from './hero.module.scss'

type HeroProps = {
  content: React.ReactNode
  bg?: any
  bgAlt?: string
  size?: 'small' | 'medium' | 'large'
}

const heroSizes = {
  large: styles.hero,
  medium: styles['heroMedium'],
  small: styles.heroSmall,
}

const Hero: React.FC<HeroProps> = ({ bg, content, bgAlt, size = 'large' }) => {
  return (
    <div className={heroSizes[size]}>
      {bg && <Img className={styles.heroBg} fluid={bg.fluid} alt={bgAlt} />}

      {content}
    </div>
  )
}

export default Hero
