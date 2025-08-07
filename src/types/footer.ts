import { IconName } from "@/constants/icons";

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