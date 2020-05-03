import * as React from 'react'
import { Link } from 'gatsby'

// components
import Layout from '../../../layout'
import Linebreak from '../../../components/linebreak'

// images
import truckImg from '../../../assets/images/truck.jpg'

// styles
import styles from './index.module.scss'

const RoadFreightPage = () => {
  return (
    <Layout title="Road Freight Service">
      <div className={styles.container}>
        <h1 className={styles.h1}>Road Freight Service</h1>
        <img className={styles.truckImage} src={truckImg} alt="A red truck" />
        <p className={styles.p}>
          If you require a quality Road Freight Services ( Road Transport )
          logistics provider that abides to your precise freight needs with
          reliable, time reducing and cost effective results, then the services
          of Swift Security are right for you.
          <Linebreak />
          Today, Swift Security can provide you with a highly professional,
          flexible, completely and customized logistics services, including Air
          freight services, Ocean freight services, and inland trucking
          services. In order to guarantee our customers a highly efficient, high
          quality and cost effective services that they desire, we have a
          network consisting of several offices situated in every major city
          across US including Shanghai, Guangzhou, Qingdao, Hong Kong, Ningbo
          and Tianjin.
          <Linebreak />
          Providing Quality Road Freighting Services, At Swift Security, we
          already know that you require optimum efficiency and professionalism
          for your Inland Transportation needs, be it your budgets, location or
          time constraints. So we supply you with an array of streamlined
          features when you want the most reliable and cost effective domestic
          trucking and inland transportation services that spans every city in
          US. Hence, you can look forward to enlisting the help of a high
          quality and efficient inland road freight partner that acts as an
          all-in-one solution for all of your logistics requirements.
          <Linebreak />
          We, at Swift Security, believe we that our clients deserve 100%
          satisfaction when choosing the most reliable and streamlined services
          in the industry. Therefore, we strive to offer you both quality inland
          transportation in order to deliver your cargo, and advice for the most
          efficient transit features that efficiently suit the cargo and your
          budget. Swift Security adhere to your personal requirements, be it
          special handling, budgeting or timing, and then devises the
          appropriate mode of operation that suits to those requirements,
          ensuring that all your cargo reaches its destination in the most
          affordable and convenient transportation available.
          <Linebreak />
          In addition, we offer you more benefits like reduced cargo damages and
          improved loss prevention, so that you experienced reduced transit
          costs without any compromising on quality of service.
        </p>

        <p className={styles.contactCTA}>
          Have any questions regarding our road freight service? Reach us
          through our <Link to="/contact-us">contact page</Link>{' '}
        </p>
      </div>
    </Layout>
  )
}

export default RoadFreightPage
