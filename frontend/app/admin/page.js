import Link from 'next/link';
import { LayoutDashboard } from 'lucide-react';
import AdminConsole from '../../components/AdminConsole';

export const metadata = {
  title: 'Admin Dashboard | Mahosh Fragrance'
};

export default function AdminPage() {
  return (
    <main className="utilityPage">
      <div className="adminPanel">
        <LayoutDashboard size={42} />
        <h1>Admin Dashboard</h1>
        <p>Add products and review orders or users through protected admin API endpoints.</p>
        <AdminConsole />
        <Link href="/" className="button primary">
          Back to Storefront
        </Link>
      </div>
    </main>
  );
}
