import { IconProps } from '@/source/shared/ui/icon/type'
import { ICONS } from '@/source/shared/ui/icon/icons'

export const Icon: React.FC<IconProps> = ({ icon, ...props }: IconProps) => {
  const IconComponent = ICONS[icon]
  if (!IconComponent) return null
  return <IconComponent {...props} />
}
