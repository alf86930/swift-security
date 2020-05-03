import * as React from 'react'

import SEO from './SEO'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

import './global.scss'

type LayoutProps = {
  title: string
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <SEO title={title} />

      <Navbar />

      <div className="main">{children}</div>

      <Footer />
    </>
  )
}

export default Layout
