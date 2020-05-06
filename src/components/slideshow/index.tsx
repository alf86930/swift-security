import React from 'react'
import { Fade } from 'react-slideshow-image'

import homeSlideOne from '../../assets/images/slider-images/home-slide-1.jpg'
import homeSlideTwo from '../../assets/images/slider-images/home-slide-2.jpg'
import homeSlideThree from '../../assets/images/slider-images/home-slide-3.jpg'
import homeSlideFour from '../../assets/images/slider-images/home-slide-4.jpg'
import homeSlideFive from '../../assets/images/slider-images/home-slide-5.jpg'
import homeSlideSix from '../../assets/images/slider-images/home-slide-6.jpg'
import homeSlideSeven from '../../assets/images/slider-images/home-slide-7.jpg'
import homeSlideEight from '../../assets/images/slider-images/home-slide-8.jpg'
import homeSlideNine from '../../assets/images/slider-images/home-slide-9.jpg'
import homeSlideTen from '../../assets/images/slider-images/home-slide-10.jpg'

import styles from './index.module.scss'

const images = [
  homeSlideOne,
  homeSlideTwo,
  homeSlideThree,
  homeSlideFour,
  homeSlideFive,
  homeSlideSix,
  homeSlideSeven,
  homeSlideEight,
  homeSlideNine,
  homeSlideTen,
]

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
