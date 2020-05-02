import * as React from 'react'

import styles from './index.module.scss'

const { useState } = React

const inputs = [
  { id: 'name', label: 'Full name', type: 'text', placeholder: 'John Doe' },
  {
    id: 'email',
    label: 'Email address',
    type: 'email',
    placeholder: 'email@example.com',
  },
  {
    id: 'message',
    label: 'Your message',
    isTextArea: true,
    placeholder: 'John Doe',
  },
]

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleInput = (field: string) => e =>
    setFormData({ ...formData, [field]: e.target.value })

  const renderInputs = () =>
    inputs.map(inputType => {
      const commonProps = {
        key: inputType.id,
        id: inputType.id,
        placeholder: inputType.placeholder,
        value: formData[inputType.id],
        onChange: handleInput(inputType.id),
      }

      return inputType.isTextArea ? (
        <textarea className={styles.textArea} {...commonProps} />
      ) : (
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor={inputType.id}>
            {inputType.label}
          </label>
          <input
            className={styles.input}
            type={inputType.type}
            {...commonProps}
          />
        </div>
      )
    })

  const handleSubmit = e => {
    e.preventDefault()

    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {renderInputs()}
      <button className={styles.submit} type="submit">
        Send
      </button>
    </form>
  )
}

export default ContactForm
