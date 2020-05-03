import * as React from 'react'
import { Link } from 'gatsby'

// components
import Layout from '../../../layout'
import Linebreak from '../../../components/linebreak'

// images
import shipImg from '../../../assets/images/ship.jpg'

// styles
import styles from './index.module.scss'

const OceanFreightPage = () => {
  return (
    <Layout title="Ocean Freight Service">
      <div className={styles.container}>
        <h1 className={styles.h1}>Ocean Freight Service</h1>

        <img className={styles.img} src={shipImg} alt="A ship" />

        <p className={styles.p}>
          We are committed to providing efficient freight and handling,
          ordering, pickup and on-time delivery; all together with constant
          support for our clientele. Among these accomplishments is the
          company’s unmatched professionalism in the field of ocean freight
          Services from our strategic basin in UK to anywhere across the globe.
          <Linebreak />
          Swift Security ensures that our customers receive complete
          satisfaction of on-time deliveries across the high seas, our ocean
          freight shipping experts will advise you on the best shipping pattern
          based on your specifications. With the dedication and ongoing support
          provided by our team and partners located around the world, we are
          better equipped to provide our clients with fully customizable, ocean
          freight services at affordable rates. Our team of in-house supply
          professionals can go beyond providing you with facilitated shipments
          as they can also advise you on the most efficient manner of conducting
          your business from wherever you are located.
          <Linebreak />
          Swift Security also boasts some of the best ocean logistics services
          offered to clientele on the planet. Our company is made up of highly
          trained, dedicated and experienced individuals who can ensure that
          your cargo get from the point of origin to the final destination in
          order to help you save precious time and money. Our professional
          supply chain team can efficiently process any shipment regardless of
          its delicate attributes and meticulous requirements. Our team will
          completely handle your cargo forwarding, pickup, delivery and shipping
          documents, from the point of origin to the destination or the carrier.
          You can trust that all your cargo will reach its intended destination
          safely and affordable.
          <Linebreak />
          You can trust we will provide you and your business with added value
          added shipping services including cargo insurance, drayage, purchase
          order financing, warehousing, distribution, and customized house
          brokerage. You can look forward to receiving all your shipping needs
          at our highly efficient one-stop ocean freight and logistics
          management services at no extra cost.
          <Linebreak />
          If you are an individual or a business in need of a fully reliable,
          customizable and cost effective international container shipping
          service, you can place your trust in the high quality services we at
          Swift Security are dedicated to offering our clientele around the
          world. You are guaranteed nothing short of 100% customer satisfaction
          when you choose our services.
        </p>

        <p className={styles.contactCTA}>
          Have any questions regarding our road freight service? Reach us
          through our <Link to="/contact-us">contact page</Link>{' '}
        </p>
      </div>
    </Layout>
  )
}

export default OceanFreightPage
