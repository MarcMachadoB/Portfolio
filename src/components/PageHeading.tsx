import type { ReactNode } from 'react'

type PageHeadingProps = {
  eyebrow: string
  title: string
  description: ReactNode
  className?: string
}

function PageHeading({ eyebrow, title, description, className = '' }: PageHeadingProps) {
  return (
    <div className={`page-heading ${className}`.trim()}>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-description">{description}</p>
    </div>
  )
}

export default PageHeading
