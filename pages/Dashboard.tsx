import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { DASHBOARD_STATS, REVENUE_DATA } from '../constants';
import { ArrowUpRight, ArrowDownRight, Download } from 'lucide-react';
import { Button } from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

export const Dashboard: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-16 min-h-screen bg-neutral-50">
      <div className="container mx-auto px-6">
        
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-black mb-2">{t('dashboard.title')}</h1>
            <p className="text-neutral-500">{t('dashboard.welcome')}</p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 flex items-center gap-2 py-2 px-4 text-sm">
            <Download size={16} /> {t('dashboard.download')}
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {DASHBOARD_STATS.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-neutral-100">
              <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-2">{t(stat.labelKey)}</p>
              <div className="flex items-end justify-between">
                <h3 className="text-2xl font-serif font-bold text-black">{stat.value}</h3>
                <div className={`flex items-center text-xs font-medium ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.isPositive ? <ArrowUpRight size={14} className="me-1" /> : <ArrowDownRight size={14} className="me-1" />}
                  {Math.abs(stat.trend)}%
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* Main Revenue Chart */}
          <div className="lg:col-span-2 bg-white p-8 rounded-sm shadow-sm border border-neutral-100">
            <h3 className="font-serif text-xl font-bold mb-6">{t('dashboard.revenuePerf')}</h3>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={REVENUE_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#a3a3a3', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#a3a3a3', fontSize: 12}} tickFormatter={(val) => `$${val}`} />
                  <Tooltip 
                    contentStyle={{backgroundColor: '#171717', border: 'none', color: '#fff'}}
                    itemStyle={{color: '#d97706'}}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#d97706" 
                    strokeWidth={3} 
                    dot={{fill: '#d97706', strokeWidth: 2}} 
                    activeDot={{r: 8}}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Occupancy Bar Chart */}
          <div className="bg-white p-8 rounded-sm shadow-sm border border-neutral-100">
            <h3 className="font-serif text-xl font-bold mb-6">{t('dashboard.occupancy')}</h3>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={REVENUE_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#a3a3a3', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{backgroundColor: '#171717', border: 'none', color: '#fff'}}
                    cursor={{fill: '#f5f5f5'}}
                  />
                  <Bar dataKey="occupancy" fill="#171717" radius={[4, 4, 0, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Activity Mockup */}
        <div className="bg-white p-8 rounded-sm shadow-sm border border-neutral-100">
          <h3 className="font-serif text-xl font-bold mb-6">{t('dashboard.recent')}</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left rtl:text-right border-collapse">
              <thead>
                <tr className="text-xs text-neutral-400 uppercase tracking-wider border-b border-neutral-100">
                  <th className="pb-4 font-semibold ps-2">{t('dashboard.table.prop')}</th>
                  <th className="pb-4 font-semibold">{t('dashboard.table.guest')}</th>
                  <th className="pb-4 font-semibold">{t('dashboard.table.dates')}</th>
                  <th className="pb-4 font-semibold">{t('dashboard.table.status')}</th>
                  <th className="pb-4 font-semibold text-end pe-2">{t('dashboard.table.amount')}</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-neutral-50">
                  <td className="py-4 font-medium ps-2">The Penthouse Loft</td>
                  <td className="py-4">Sarah Jenkins</td>
                  <td className="py-4 text-neutral-500">Jul 12 - Jul 15</td>
                  <td className="py-4"><span className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs">{t('dashboard.table.confirmed')}</span></td>
                  <td className="py-4 text-end font-medium pe-2">$1,250</td>
                </tr>
                <tr className="border-b border-neutral-50">
                  <td className="py-4 font-medium ps-2">Harbor View Condo</td>
                  <td className="py-4">Michael Chang</td>
                  <td className="py-4 text-neutral-500">Jul 18 - Jul 24</td>
                  <td className="py-4"><span className="px-2 py-1 bg-yellow-50 text-yellow-700 rounded-full text-xs">{t('dashboard.table.pending')}</span></td>
                  <td className="py-4 text-end font-medium pe-2">$2,100</td>
                </tr>
                 <tr className="border-b border-neutral-50">
                  <td className="py-4 font-medium ps-2">The Penthouse Loft</td>
                  <td className="py-4">Elena Rodriguez</td>
                  <td className="py-4 text-neutral-500">Jul 05 - Jul 08</td>
                  <td className="py-4"><span className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs">{t('dashboard.table.completed')}</span></td>
                  <td className="py-4 text-end font-medium pe-2">$980</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};