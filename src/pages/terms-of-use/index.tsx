import * as React from 'react'

import Layout from '../../layout'
import Linebreak from '../../components/linebreak'

import styles from './index.module.scss'

const TOSPage = () => {
  return (
    <Layout title="Terms of Use">
      <div className={styles.container}>
        <h1 className={styles.h1}>Terms of Use</h1>

        <p className={styles.p}>
          Please read these terms of service carefully before using
          [swiftsecurity.com] website operated by us.
          <Linebreak />
          Conditions of Use We will provide their services to you, which are
          subject to the conditions stated below in this document. Every time
          you visit this website, use its services or make a purchase, you
          accept the following conditions.
          <Linebreak />
          This is why we urge you to read them carefully. Privacy Policy Before
          you continue using our website we advise you to read our privacy
          policy [link to privacy policy] regarding our user data collection. It
          will help you better understand our practices. Copyright Content
          published on this website (digital downloads, images, texts, graphics,
          logos) is the property of Swift Security and/or its content creators
          and protected by international copyright laws. The entire compilation
          of the content found on this website is the exclusive property of
          Swift Security, with copyright authorship for this compilation by
          Swift Security.
          <Linebreak />
          Communications The entire communication with us is electronic. Every
          time you send us an email or visit our website, you are going to be
          communicating with us. You hereby consent to receive communications
          from us. If you subscribe to the news on our website, you are going to
          receive regular emails from us.
          <Linebreak />
          We will continue to communicate with you by posting news and notices
          on our website and by sending you emails. You also agree that all
          notices, disclosures, agreements and other communications we provide
          to you electronically meet the legal requirements that such
          communications be in writing.
          <Linebreak />
          Applicable Law By visiting this website, you agree that the laws of
          your country, without regard to principles of conflict laws, will
          govern these terms of service, or any dispute of any sort that might
          come between Swift Security and you, or its business partners and
          associates. Disputes Any dispute related in any way to your visit to
          this website or to products you purchase from us shall be arbitrated
          by state or federal court in your country and you consent to exclusive
          jurisdiction and venue of such courts.
          <Linebreak />
          Comments, Reviews, and Emails Visitors may post content as long as it
          is not obscene, illegal, defamatory, threatening, infringing of
          intellectual property rights, invasive of privacy or injurious in any
          other way to third parties. Content has to be free of software
          viruses, political campaign, and commercial solicitation. We reserve
          all rights (but not the obligation) to remove and/or edit such
          content.
          <Linebreak />
          When you post your content, you grant Swift Security non-exclusive,
          royalty-free and irrevocable right to use, reproduce, publish, modify
          such content throughout the world in any media. License and Site
          Access We grant you a limited license to access and make personal use
          of this website. You are not allowed to download or modify it. This
          may be done only with written consent from us. User Account If you are
          an owner of an account on this website, you are solely responsible for
          maintaining the confidentiality of your private user details (username
          and password).
          <Linebreak />
          You are responsible for all activities that occur under your account
          or password. We reserve all rights to terminate accounts, edit or
          remove content and cancel orders in their sole discretion.
        </p>
      </div>
    </Layout>
  )
}

export default TOSPage
