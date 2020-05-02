import * as React from 'react'

// icons
import MailIcon from '../../assets/icons/MailIcon'
import PhoneIcon from '../../assets/icons/PhoneIcon'

// styles
import styles from './index.module.scss'

const ContactInfo = () => {
  return (
    <div className={styles.info}>
      <h2 className={styles.h2}>Contact Us</h2>

      <p className={styles.p}>
        Swift Security &amp; Logistics' customer support is here for you at any
        point. Do you have any inquiries about our services or do you have a
        complaint? Do you want to ship a secure vault or hire our security
        services?
        <br /> <br />
        You can reach us by filling the form below. If it's a high-priority
        request you can reach us via the methods below:
      </p>

      <div className={styles.contactMethodContainer}>
        <p className={styles.contactMethod}>
          <MailIcon className={styles.icon} />{' '}
          <span>support@swiftsecuritylogistics.com</span>
        </p>
        <p className={styles.contactMethod}>
          <PhoneIcon className={styles.icon} /> <span>+31 313 313 3131</span>
        </p>
      </div>

      <p className={styles.p}>We&apos;re available 24/7.</p>
    </div>
  )
}

export default ContactInfo
