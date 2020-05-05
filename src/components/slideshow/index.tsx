import React from 'react'
import { Fade } from 'react-slideshow-image'

import homeSlideOne from '../../assets/images/slider-images/home-slide-one.jpg'
import homeSlideTwo from '../../assets/images/slider-images/home-slide-two.jpg'
import homeSlideThree from '../../assets/images/slider-images/home-slide-three.jpg'
import homeSlideFour from '../../assets/images/slider-images/home-slide-four.jpg'

import styles from './index.module.scss'

const images = [homeSlideOne, homeSlideTwo, homeSlideThree, homeSlideFour]

const properties = {
  duration: 4000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  scale: 0.4,
  arrows: true,
  pauseOnHover: false,
}

interface SlideshowProps {
  content: React.ReactNode
  contentLg: React.ReactNode
}

const Slideshow: React.FC<SlideshowProps> = ({ content, contentLg }) => {
  const renderSlides = () =>
    images.map((img, i) => (
      <div className={styles.slideContainer} key={i}>
        <div
          className={styles.slide}
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className={styles.content}>{content}</div>

          {contentLg && <div className={styles.contentLg}>{contentLg}</div>}
        </div>
      </div>
    ))

  return <Fade {...properties}>{renderSlides()}</Fade>
}

export default Slideshow
