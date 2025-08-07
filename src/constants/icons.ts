// src/constants/icons.ts
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Calendar,
  Award,
  Code,
  Database,
  Cloud,
  Wrench,
  Monitor,
  Server,
  ChevronDown,
  ChevronUp,
  X,
  Check,
  AlertCircle,
  Info,
  AlertTriangle
} from 'lucide-react';

// アイコンのマッピング
export const ICONS = {
  // コンタクト関連
  mail: Mail,
  phone: Phone,
  location: MapPin,
  external: ExternalLink,
  download: Download,
  
  // UI関連
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  close: X,
  
  // ステータス関連
  success: Check,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
  
  // その他
  calendar: Calendar,
  award: Award,
  code: Code,
  database: Database,
  cloud: Cloud,
  wrench: Wrench,
  monitor: Monitor,
  server: Server,
} as const;

// アイコンの型定義
export type IconName = keyof typeof ICONS;

// アイコンサイズの定数
export const ICON_SIZES = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
} as const;

export type IconSize = keyof typeof ICON_SIZES;