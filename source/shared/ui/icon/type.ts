import { SVGProps } from 'react'

export type IconName = 'home' | 'burger' | 'basket' | 'person' | 'arrowDownAccent'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: IconName
}

export type IconsType = {
  [key in IconName]?: React.FC<SVGProps<SVGSVGElement>>
}
