import * as React from 'react'
import styles from './hero.module.scss'

type HeroProps = {
  content: React.ReactNode
  id?: string
}

const idMapping = {
  'home-vault-one': styles.heroHomeVaultOne,
  'home-ship-one': styles.heroHomeShipOne,
  'home-plane-one': styles.heroHomePlaneOne,
  'home-woman-one': styles.heroHomeWomanOne,
}

const Hero: React.FC<HeroProps> = ({ id, content }) => {
  const backgroundImage = idMapping[id] || ''

  return <div className={`${styles.hero} ${backgroundImage}`}>{content}</div>
}

export default Hero
