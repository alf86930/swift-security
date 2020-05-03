import * as React from 'react'
import { Link } from 'gatsby'

import TruckIcon from '../../assets/icons/TruckIcon'
import VaultIcon from '../../assets/icons/VaultIcon'
import ServiceIcon from '../../assets/icons/ServiceIcon'

import styles from './services-icons.module.scss'

const services = [
  { label: 'Track a package', href: '/track', icon: <TruckIcon /> },
  { label: 'Secure vault', href: '/secure-vault', icon: <VaultIcon /> },
  { label: 'Contact us', href: '/contact-us', icon: <ServiceIcon /> },
]

const ServicesIcon = () => {
  const renderServices = () =>
    services.map((service, i) => (
      <Link key={i} className={styles.serviceIcon} to={service.href}>
        {service.icon}
        <p className={styles.serviceLabel}>{service.label}</p>
      </Link>
    ))

  return (
    <div className={styles.container}>
      <div className={styles.content}>{renderServices()}</div>
    </div>
  )
}

export default ServicesIcon
