import { IconName, IconSize } from '@/constants/icons';
import { LucideIcon } from 'lucide-react';

export interface IconProps {
  name: IconName;
  size?: IconSize | number;
  className?: string;
  color?: string;
}

export interface IconConfig {
  icon: LucideIcon;
  label: string;
  size?: number;
  className?: string;
}

export interface IconMap {
  [key: string]: LucideIcon;
}