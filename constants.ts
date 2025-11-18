import { 
  MessageSquare, 
  Sparkles, 
  Key, 
  Camera, 
  Wrench, 
  DollarSign,
  LucideIcon
} from 'lucide-react';
import { ChartData } from './types';

export interface NavItem {
  key: string;
  path: string;
}

export interface ServiceItem {
  titleKey: string;
  descKey: string;
  icon: LucideIcon;
}

export interface DashboardStat {
  labelKey: string;
  value: string;
  trend: number;
  isPositive: boolean;
}

export const NAV_LINKS: NavItem[] = [
  { key: 'nav.home', path: '/' },
  { key: 'nav.services', path: '/services' },
  { key: 'nav.about', path: '/about' },
  { key: 'nav.dashboard', path: '/dashboard' },
  { key: 'nav.contact', path: '/contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    titleKey: 'services.guestComm.title',
    descKey: 'services.guestComm.desc',
    icon: MessageSquare,
  },
  {
    titleKey: 'services.cleaning.title',
    descKey: 'services.cleaning.desc',
    icon: Sparkles,
  },
  {
    titleKey: 'services.checkin.title',
    descKey: 'services.checkin.desc',
    icon: Key,
  },
  {
    titleKey: 'services.listing.title',
    descKey: 'services.listing.desc',
    icon: Camera,
  },
  {
    titleKey: 'services.maintenance.title',
    descKey: 'services.maintenance.desc',
    icon: Wrench,
  },
  {
    titleKey: 'services.revenue.title',
    descKey: 'services.revenue.desc',
    icon: DollarSign,
  },
];

export const DASHBOARD_STATS: DashboardStat[] = [
  { labelKey: 'dashboard.stats.revenue', value: '$42,850', trend: 12.5, isPositive: true },
  { labelKey: 'dashboard.stats.occupancy', value: '88%', trend: 4.2, isPositive: true },
  { labelKey: 'dashboard.stats.nightly', value: '$325', trend: -1.5, isPositive: false },
  { labelKey: 'dashboard.stats.rating', value: '4.92', trend: 0.5, isPositive: true },
];

export const REVENUE_DATA: ChartData[] = [
  { name: 'Jan', revenue: 4000, occupancy: 65 },
  { name: 'Feb', revenue: 3500, occupancy: 60 },
  { name: 'Mar', revenue: 5000, occupancy: 75 },
  { name: 'Apr', revenue: 6200, occupancy: 80 },
  { name: 'May', revenue: 7000, occupancy: 85 },
  { name: 'Jun', revenue: 8500, occupancy: 92 },
  { name: 'Jul', revenue: 9200, occupancy: 95 },
];