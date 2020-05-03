import * as React from 'react'
import { Link } from 'gatsby'

// components
import Layout from '../../../layout'
import Linebreak from '../../../components/linebreak'

// images
import planeImg from '../../../assets/images/plane.jpg'

// styles
import styles from './index.module.scss'

const AirFreightPage = () => {
  return (
    <Layout title="Air Freight Service">
      <div className={styles.container}>
        <h1 className={styles.h1}>Air Freight Service</h1>
        <img className={styles.planeImg} src={planeImg} alt="An airplane" />
        <p className={styles.p}>
          Need a one-stop solution for your international air freight and
          forwarding needs, whereas a faster, safer and cost effective way to
          ship and track your cargo by air to anywhere across the globe? Look no
          further than Swift Security.
          <Linebreak />
          For the past years, Swift Security Logistics has been one of the
          leading forces in the international air freight and logistics industry
          thanks to the commitment of providing nothing short of proficiency for
          customers seeking specified air freight requirements. We are not an
          ordinary air transportation company as you will learn when acquiring
          our services.
          <Linebreak />
          Our company operates from a strategic location in UK and offers the
          most customizable and cost effective expedieted air freight in and out
          of the country. Swift Security is made up of a ground breaking work
          force consisting of some of the most well trained and experienced
          people in the air freight business. As a result, our services are
          cleverly designed and proven to provide you and your business with
          quality air freight forwarder services and shipment tailored to your
          precise needs, be it timing or budget.
          <Linebreak />
          Whether you own a small business and want it to grow or are already at
          the top of your industry and want to keep it that way, and require
          reliable air freighting service that fits your company’s needs, you
          can trust our company to deliver what you need, when and where you
          need it on time and in perfect condition. Swift Security also handles
          all of the work so you won’t have to. Our team will provide booking,
          freight, handling, documentation and air carrier, all at affordable
          pricing. Additionally, our experts provide their support around the
          clock so customers can contact us at any time that is convenient to
          them.
          <Linebreak />
          If you want a speedy, reliable, customizable and affordable service
          for your air freight and logistic requirements, then don’t delay.
          Please contact Swift Security today. You are guaranteed 100% customer
          satisfaction when you choose our services.
        </p>

        <p className={styles.contactCTA}>
          Have any questions regarding our air freight service? Reach us through
          our <Link to="/contact-us">contact page</Link>{' '}
        </p>
      </div>
    </Layout>
  )
}

export default AirFreightPage
