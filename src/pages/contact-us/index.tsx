import * as React from 'react'

// components
import Layout from '../../layout'
import ContactInfo from '../../components/contact-info'
import ContactForm from '../../components/contact-form'

// styles
import styles from './index.module.scss'

const ContactUsPage = () => {
  return (
    <Layout title="Contact us">
      <div className={styles.container}>
        <ContactInfo />
        {/** <ContactForm /> **/}
      </div>
    </Layout>
  )
}

export default ContactUsPage
