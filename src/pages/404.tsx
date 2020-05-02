import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../layout'
import ErrorIcon from '../assets/icons/ErrorIcon'

import styles from './404.module.scss'

const ErrorPage = () => {
  return (
    <Layout title="An error occurred">
      <div className={styles.container}>
        <ErrorIcon className={styles.errorIcon} />

        <h2>We&apos;re sorry, an error occurred!</h2>
        <p>We can&apos;t find the page you&apos;re looking for</p>

        <Link className={styles.goHome} to="/">
          Go home
        </Link>
      </div>
    </Layout>
  )
}

export default ErrorPage
