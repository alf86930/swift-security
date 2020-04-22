import * as React from 'react'
import styles from './hero.module.scss'

type HeroProps = {
  bg: any
  content: React.ReactNode
}

const Hero: React.FC<HeroProps> = ({ bg, content }) => {
  return (
    <div className={styles.hero}>
      <img
        className={styles.heroBg}
        src={bg}
        alt="Man standing in front of vault"
      />

      <div className={styles.heroContent}>{content}</div>
    </div>
  )
}

export default Hero
