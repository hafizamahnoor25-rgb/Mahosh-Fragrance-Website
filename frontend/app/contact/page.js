import Link from 'next/link';
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';

export const metadata = {
  title: 'Contact | Mahosh Fragrance',
  description: 'Contact Mahosh Fragrance for private consultations, wholesale, press, and bespoke gifting.'
};

export default function ContactPage() {
  return (
    <main className="utilityPage">
      <div className="adminPanel">
        <Mail size={42} />
        <h1>Contact Mahosh</h1>
        <p>Private consultations, bespoke gifting, wholesale, and press requests are handled by appointment.</p>
        <div className="adminGrid">
          <div className="adminTile">
            <Mail />
            <strong>hello@mahoshfragrance.com</strong>
          </div>
          <div className="adminTile">
            <Phone />
            <strong>+1 212 555 0184</strong>
          </div>
          <div className="adminTile">
            <MapPin />
            <strong>New York Atelier</strong>
          </div>
        </div>
        <Link href="/" className="button primary">
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </div>
    </main>
  );
}
