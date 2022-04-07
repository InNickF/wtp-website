import { LinkProps } from 'next/link'
import { ReactNode } from 'react'

export interface CustomLinkProps extends LinkProps {
  scrollTo?: Boolean
  _blank?: Boolean
  children: ReactNode
}
