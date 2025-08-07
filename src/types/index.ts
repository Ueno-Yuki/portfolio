import { IconName, IconSize } from "@/constants/icons";
import { LucideIcon } from "lucide-react";

/** =================================
 *  スキル
 *  ================================= */
export interface SkillItem {
  name: string;
  iconClass: string;
  rating: number;
}

export interface SkillCategory {
  title: string;
  iconName: IconName;
  color: string;
  skills: SkillItem[];
}

/** =================================
 *  プロジェクト
 *  ================================= */
export interface Project {
  title: string;
  description: string;
  techStack: string[];
}

/** =================================
 *  フッター
 *  ================================= */
export interface ContactLink {
  href?: string;
  text: string;
  onClick?: () => void;
  iconName?: IconName;
  ariaLabel: string; // 必須に変更
  isExternal?: boolean;
  svgPath?: string; // SVGパスを追加
  hasSvg?: boolean; // SVGの有無を明示
}

/** =================================
 *  Lucide Icons
 *  ================================= */
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