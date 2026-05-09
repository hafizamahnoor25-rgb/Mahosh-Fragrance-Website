import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import AuthForm from '../../components/AuthForm';

export const metadata = {
  title: 'Login | Mahosh Fragrance'
};

export default function LoginPage() {
  return (
    <main className="utilityPage">
      <div className="utilityPanel">
        <h1>Login</h1>
        <p>Access your Mahosh account, cart, and order history.</p>
        <AuthForm mode="login" />
        <Link href="/" className="button ghost">
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </div>
    </main>
  );
}
