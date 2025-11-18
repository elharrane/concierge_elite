import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface DashboardStat {
  label: string;
  value: string;
  trend: number; // percentage change
  isPositive: boolean;
}

export interface ChartData {
  name: string;
  revenue: number;
  occupancy: number;
}