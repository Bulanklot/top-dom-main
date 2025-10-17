import { SVGProps } from 'react'

export const BurgerIcon: React.FC<SVGProps<SVGSVGElement>> = props => {

  const {id,...rest}= props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="25" viewBox="0 0 29 25" fill="none" {...rest}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="100%" y2="0">
          <stop offset="0%" stopColor="rgba(23, 124, 206, 1)" />
          <stop offset="50%" stopColor="rgba(36, 163, 249, 1)" />
          <stop offset="100%" stopColor="rgba(86, 204, 251, 1)" />
        </linearGradient>
      </defs>
      <rect width="29" height="3.10714" rx="1.5" fill="#D9D9D9" />
      <rect y="7.25" width="29" height="3.10714" rx="1.5" fill="#D9D9D9" />
      <rect y="14.5" width="29" height="3.10714" rx="1.5" fill="#D9D9D9" />
      <rect y="21.75" width="29" height="3.10714" rx="1.5" fill="#D9D9D9" />
    </svg>
  )
}
