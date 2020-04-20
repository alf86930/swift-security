import * as React from 'react'
import SEO from './SEO'

type LayoutProps = {
  title: string
  children: React.ReactNode
}
export default (props: LayoutProps) => (
  <>
    <SEO title={props.title} />
    {props.children}
  </>
)
