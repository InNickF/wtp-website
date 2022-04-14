import { LinkProps } from 'next/link'
import { ReactNode } from 'react'

export interface CustomLinkProps extends LinkProps {
  anchor?: Boolean
  _blank?: Boolean
  className?: string
  children: ReactNode
}
