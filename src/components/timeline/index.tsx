import * as React from 'react'

import styles from './index.module.scss'

interface TimelineProps {
  index: number
  length: number
  isDelayed?: boolean
}

const Timeline: React.FC<TimelineProps> = ({ index, length, isDelayed }) => {
  const timelineClassname =
    index === 0
      ? styles.timelineFirst
      : index === length
      ? styles.timelineLast
      : styles.timeline

  return (
    <span className={`${timelineClassname} ${isDelayed && styles.delayed}`} />
  )
}

export default Timeline
