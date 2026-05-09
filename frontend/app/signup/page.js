import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import AuthForm from '../../components/AuthForm';

export const metadata = {
  title: 'Signup | Mahosh Fragrance'
};

export default function SignupPage() {
  return (
    <main className="utilityPage">
      <div className="utilityPanel">
        <h1>Signup</h1>
        <p>Create an account for checkout, order tracking, and private launch access.</p>
        <AuthForm mode="signup" />
        <Link href="/" className="button ghost">
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </div>
    </main>
  );
}
