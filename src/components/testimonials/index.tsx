import * as React from 'react'
import { Slide } from 'react-slideshow-image'

import styles from './index.module.scss'

const properties = {
  autoplay: false,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true,
  pauseOnHover: false,
}

const quotes = [
  {
    quote: `I have nothing but the best of things to say about Swift Security &
  Logistics. Since moving our inventory to their secure vault offerings, our users are happier than ever
  knowing that their valuables are safe.`,
    author: 'Mike Nowitski',
  },

  {
    quote: `We've tried many services but Swift Security & Logistics is the only one
    that has truly met our needs. Their air freight service is the best I've ever used. The customer service
    is top notch as well.`,
    author: 'Sam Brady',
  },
  {
    quote: `If you're looking for a secure vault solution at an affordable price, Swift Security is
    your best chance. We left Merrion Vaults for Swift because they have a much better package. 10/10 would recommend!`,
    author: 'Mary Vernes',
  },
]

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>See what our customers have to say</h2>

      <Slide {...properties}>
        {quotes.map((q, i) => (
          <div className={styles.quote} key={i}>
            <blockquote>
              <p className={styles.quoteP}>{q.quote}</p>
              <cite className={styles.quoteCite}>- {q.author}</cite>
            </blockquote>
          </div>
        ))}
      </Slide>
    </div>
  )
}

export default Testimonials
