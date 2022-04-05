import { FC } from 'react'
import NextHead from 'next/head'
import { HeadProps } from './typings/props'
const Head: FC<HeadProps> = ({ title, description, children, ...props }) => {
  const pageTitle = `White Peak Tech ${title ? `| ${title}` : ''}`

  return (
    <NextHead {...props}>
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="icon" href="/favicon.ico" />
      {children}
    </NextHead>
  )
}

export default Head
