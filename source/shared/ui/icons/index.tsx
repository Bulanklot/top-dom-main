import { IconProps } from '@/source/shared/ui/icons/type'
import { ICONS } from '@/source/shared/ui/icons/icons'


export const Icon: React.FC<IconProps> = ({ icon, ...props }: IconProps) => {
  const IconComponent = ICONS[icon]
  if (!IconComponent) return null
  return <IconComponent {...props} />
}
