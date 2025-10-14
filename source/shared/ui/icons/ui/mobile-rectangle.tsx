import { SVGProps } from 'react'

export const MobileRectangle: React.FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg width="55" height="6" viewBox="0 0 55 6" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="55" height="6" rx="3" fill="#D9D9D9" />
    </svg>
  )
}
