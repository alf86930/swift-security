import * as React from 'react'

import TruckIcon from '../../assets/icons/TruckIcon'
import VaultIcon from '../../assets/icons/VaultIcon'
import ServiceIcon from '../../assets/icons/ServiceIcon'

import styles from './services-icons.module.scss'

const services = [
  { label: 'Track a package', icon: <TruckIcon /> },
  { label: 'Secure vault', icon: <VaultIcon /> },
  { label: 'Contact us', icon: <ServiceIcon /> },
]

const ServicesIcon = () => {
  const renderServices = () =>
    services.map((service, i) => (
      <div key={i} className={styles.serviceIcon}>
        {service.icon}
        <p className={styles.serviceLabel}>{service.label}</p>
      </div>
    ))

  return <div className={styles.container}>{renderServices()}</div>
}

export default ServicesIcon
