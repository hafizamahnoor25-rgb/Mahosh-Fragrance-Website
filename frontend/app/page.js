import {
  ArrowRight,
  BadgeCheck,
  Heart,
  Instagram,
  Mail,
  Menu,
  ShoppingBag,
  Sparkles,
  Star,
  Twitter
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { featuredProducts, testimonials } from '../lib/data';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <section id="home" className="hero">
        <div className="heroMedia" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1800&q=90"
            alt="Mahosh Fragrance luxury perfume bottle"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="heroOverlay" />
        <div className="container heroContent">
          <p className="eyebrow">Private fragrance atelier</p>
          <h1>Mahosh Fragrance</h1>
          <p className="heroCopy">
            Cinematic perfumes composed with rare woods, luminous florals, and a signature trail made for evening rooms,
            velvet wardrobes, and unforgettable arrivals.
          </p>
          <div className="heroActions">
            <Link href="#shop" className="button primary">
              Shop Collection <ArrowRight size={18} />
            </Link>
            <Link href="#about" className="button ghost">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Brand promises">
        <span>Extrait strength</span>
        <span>Hand-finished bottles</span>
        <span>Responsibly sourced oils</span>
        <span>Complimentary gift wrap</span>
      </section>

      <section id="shop" className="section">
        <div className="container sectionHeader">
          <p className="eyebrow">Featured perfumes</p>
          <h2>Signature Scents</h2>
          <p>High-impact compositions with a refined finish, crafted for collectors and daily rituals alike.</p>
        </div>
        <div className="container productGrid">
          {featuredProducts.map((product) => (
            <article className="productCard" key={product.name}>
              <div className="productImage">
                <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 33vw" />
                <button className="wishlist" aria-label={`Save ${product.name}`}>
                  <Heart size={18} />
                </button>
              </div>
              <div className="productBody">
                <div>
                  <p className="productCategory">{product.category}</p>
                  <h3>{product.name}</h3>
                </div>
                <p>{product.description}</p>
                <div className="notes">
                  {product.notes.map((note) => (
                    <span key={note}>{note}</span>
                  ))}
                </div>
                <div className="productMeta">
                  <strong>${product.price}</strong>
                  <span>
                    <Star size={16} fill="currentColor" /> {product.rating}
                  </span>
                </div>
                <button className="button full">
                  <ShoppingBag size={18} /> Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section aboutSection">
        <div className="container aboutGrid">
          <div className="aboutImage">
            <Image
              src="https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1200&q=85"
              alt="Elegant perfume atelier"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </div>
          <div className="aboutCopy">
            <p className="eyebrow">About the brand</p>
            <h2>Composed for Presence</h2>
            <p>
              Mahosh Fragrance blends classical perfumery with a modern, architectural eye. Each bottle is built around
              contrast: shadow and light, silk and smoke, intimacy and projection.
            </p>
            <div className="proofGrid">
              <div>
                <BadgeCheck />
                <strong>IFRA-aware formulas</strong>
                <span>Designed for elegant wearability.</span>
              </div>
              <div>
                <Sparkles />
                <strong>Luxury finish</strong>
                <span>Magnetic caps, embossed cartons, and gift-ready packaging.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section reviews">
        <div className="container sectionHeader">
          <p className="eyebrow">Customer reviews</p>
          <h2>Admired Worldwide</h2>
        </div>
        <div className="container testimonialGrid">
          {testimonials.map((item) => (
            <article className="testimonial" key={item.name}>
              <div className="stars">★★★★★</div>
              <p>“{item.quote}”</p>
              <strong>{item.name}</strong>
              <span>{item.location}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="newsletter">
        <div className="container newsletterInner">
          <div>
            <p className="eyebrow">Private list</p>
            <h2>Receive new launches first</h2>
          </div>
          <form>
            <label htmlFor="email" className="srOnly">
              Email address
            </label>
            <input id="email" type="email" placeholder="your@email.com" />
            <button className="button primary" type="submit">
              Subscribe <Mail size={18} />
            </button>
          </form>
        </div>
      </section>

      <section id="contact" className="section contactSection">
        <div className="container contactGrid">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Visit the Atelier</h2>
            <p>For wholesale, bespoke gifting, press, and private consultation requests.</p>
          </div>
          <form className="contactForm">
            <input placeholder="Name" />
            <input placeholder="Email" type="email" />
            <textarea placeholder="Message" rows="5" />
            <button className="button primary" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Navbar() {
  return (
    <header className="nav">
      <Link href="#home" className="brand">
        Mahosh <span>Fragrance</span>
      </Link>
      <nav className="navLinks" aria-label="Main navigation">
        <Link href="#home">Home</Link>
        <Link href="#shop">Shop</Link>
        <Link href="#about">About</Link>
        <Link href="#contact">Contact</Link>
      </nav>
      <div className="navActions">
        <Link href="/cart" className="iconButton" aria-label="Cart">
          <ShoppingBag size={20} />
        </Link>
        <button className="iconButton menuButton" aria-label="Menu">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div>
          <Link href="#home" className="brand">
            Mahosh <span>Fragrance</span>
          </Link>
          <p>Luxury perfumes crafted for a lasting signature.</p>
        </div>
        <div className="socials">
          <Link href="#" aria-label="Instagram">
            <Instagram />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Twitter />
          </Link>
          <Link href="mailto:hello@mahoshfragrance.com" aria-label="Email">
            <Mail />
          </Link>
        </div>
      </div>
    </footer>
  );
}
