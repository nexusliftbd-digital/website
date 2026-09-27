import { Metadata } from 'next';
import DashboardPage from './page';

export const metadata: Metadata = {
  title: 'Executive CRM Dashboard | Nexus Lift',
  description: 'Manage pipelines, digital vault handoffs, and business SLA metrics.',
  robots: { index: false, follow: false },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  // Just returning the page content wrapper.
  // In a real app we might put layout elements here.
  return <>{children}</>;
}
