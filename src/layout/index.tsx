import * as React from 'react'

import SEO from './SEO'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

import './global.scss'

type LayoutProps = {
  title: string
  children: React.ReactNode
}
export default (props: LayoutProps) => (
  <>
    <SEO title={props.title} />

    <Navbar />

    <div className="main">{props.children}</div>

    <Footer />
  </>
)
