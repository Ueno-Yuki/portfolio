import { IconName } from "@/constants/icons";

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