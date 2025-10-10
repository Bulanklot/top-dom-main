import { SVGProps } from 'react'

export const ExitIcon: React.FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" {...props}>
      <rect width="56" height="56" rx="10" fill="#D9D9D9" fillOpacity="0.1" />
      <path d="M35 35L21 21" stroke="#A9A9A9" strokeWidth="5" strokeLinecap="round" />
      <path d="M35 21L21.0302 34.9698" stroke="#A9A9A9" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}
