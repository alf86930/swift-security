import * as React from 'react'
import styles from './hero.module.scss'

type HeroProps = {
  content: React.ReactNode
  lgContent?: React.ReactNode
  id?: string
}

const idMapping = {
  'home-vault-one': styles.heroHomeVaultOne,
  'home-ship-one': styles.heroHomeShipOne,
  'home-plane-one': styles.heroHomePlaneOne,
  'home-truck-one': styles.heroHomeTruckOne,
  'home-woman-one': styles.heroHomeWomanOne,
}

const Hero: React.FC<HeroProps> = ({ id, content, lgContent }) => {
  const backgroundImage = idMapping[id] || ''

  return (
    <div className={`${styles.hero} ${backgroundImage}`}>
      <div className={styles.content}>{content}</div>

      {lgContent && <div className={styles.desktopContent}>{lgContent}</div>}
    </div>
  )
}

export default Hero
