import { SVGProps } from 'react'


export enum IconName {
  Home = 'home',
  Burger = 'burger',
  Basket = 'basket',
  Person = 'person',
  Exit = 'exit',
  Edit = 'edit',
  Logo = 'logo'
}

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: IconName
}

export type IconsType = {
  [key in IconName]?: React.FC<SVGProps<SVGSVGElement>>
}
