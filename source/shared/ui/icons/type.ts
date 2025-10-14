import { SVGProps } from 'react'
import { ArrowDownAccent } from '@/source/shared/ui/icons/ui/arrow-down-accent'


export const enum EIconName {
  Home = 'home',
  Burger = 'burger',
  Basket = 'basket',
  Person = 'person',
  Exit = 'exit',
  Edit = 'edit',
  Logo = 'logo',
  ArrowDownAccent= 'arrowDownAccent',
  Rectangle = 'rectangle',
}

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: EIconName
}

export type IconsType = {
  [key in EIconName]?: React.FC<SVGProps<SVGSVGElement>>
}
