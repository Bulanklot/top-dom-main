import { SVGProps } from 'react'
import { ArrowDownAccent } from '@/source/shared/ui/icons/ui/arrow-down-accent'


export enum IconName {
  Home = 'home',
  Burger = 'burger',
  Basket = 'basket',
  Person = 'person',
  Exit = 'exit',
  Edit = 'edit',
  Logo = 'logo',
  ArrowDownAccent= 'arrowDownAccent'
}

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: IconName
}

export type IconsType = {
  [key in IconName]?: React.FC<SVGProps<SVGSVGElement>>
}
