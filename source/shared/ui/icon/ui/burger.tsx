import { SVGProps } from 'react'

export const BurgerIcon: React.FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="25" viewBox="0 0 29 25" fill="none" {...props}>
      <rect width="29" height="3.10714" rx="1.5" fill="#D9D9D9" />
      <rect y="7.25" width="29" height="3.10714" rx="1.5" fill="#D9D9D9" />
      <rect y="14.5" width="29" height="3.10714" rx="1.5" fill="#D9D9D9" />
      <rect y="21.75" width="29" height="3.10714" rx="1.5" fill="#D9D9D9" />
    </svg>
  )
}
