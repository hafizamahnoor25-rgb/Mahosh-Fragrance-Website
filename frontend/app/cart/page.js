import Link from 'next/link';
import { ArrowLeft, ShoppingBag } from 'lucide-react';

export const metadata = {
  title: 'Cart | Mahosh Fragrance'
};

export default function CartPage() {
  return (
    <main className="utilityPage">
      <div className="utilityPanel">
        <ShoppingBag size={42} />
        <h1>Your Cart</h1>
        <p>
          The storefront includes cart-ready controls, while the backend exposes authenticated cart and checkout
          endpoints for production integration.
        </p>
        <Link href="/" className="button primary">
          <ArrowLeft size={18} /> Continue Shopping
        </Link>
      </div>
    </main>
  );
}
