import { ICONS, ICON_SIZES } from '@/constants/icons';
import { IconProps } from '@/types/icons';

export default function Icon({ 
  name, 
  size = 'md', 
  className = '', 
  color 
}: IconProps) {
  const IconComponent = ICONS[name];
  const iconSize = typeof size === 'number' ? size : ICON_SIZES[size];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  
  return (
    <IconComponent
      size={iconSize}
      className={className}
      color={color}
    />
  );
}