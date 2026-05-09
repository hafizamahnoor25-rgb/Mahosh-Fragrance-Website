import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import CheckoutForm from '../../components/CheckoutForm';

export const metadata = {
  title: 'Checkout | Mahosh Fragrance'
};

export default function CheckoutPage() {
  return (
    <main className="utilityPage">
      <div className="utilityPanel">
        <h1>Checkout</h1>
        <p>Complete your fragrance order using the authenticated checkout API.</p>
        <CheckoutForm />
        <Link href="/" className="button ghost">
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </div>
    </main>
  );
}
