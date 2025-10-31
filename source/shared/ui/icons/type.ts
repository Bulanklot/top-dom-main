import { SVGProps } from 'react'


export const enum EIconName {
  Home = 'home',
  Burger = 'burger',
  Basket = 'basket',
  Person = 'person',
  Exit = 'exit',
  Edit = 'edit',
  Logo = 'logo',
  ArrowDownAccent = 'arrowDownAccent',
  Rectangle = 'rectangle',
  ArrowRight = 'arrowRight',
  TgIconHeader = 'tgIconHeader',
  YoutubeIconHeader = 'youtubeIconHeader',
  WhatsappIconHeader = 'whatsappIconHeader',
  VkIconHeader = 'vkIconHeader',
}

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: EIconName
}

export type IconsType = {
  [key in EIconName]?: React.FC<SVGProps<SVGSVGElement>>
}
