import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import Product from '../models/Product.js';
import User from '../models/User.js';

dotenv.config();

const products = [
  {
    name: 'Noir Saffron',
    slug: 'noir-saffron',
    description: 'A smoky extrait with saffron, black rose, amber resin, and polished cedar.',
    notes: ['Saffron', 'Black rose', 'Amber', 'Cedar'],
    category: 'Extrait',
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=85',
    price: 245,
    rating: 4.9,
    inventory: 42,
    featured: true
  },
  {
    name: 'Velvet Oud',
    slug: 'velvet-oud',
    description: 'Creamy oud layered with vanilla smoke, bergamot, and warm suede.',
    notes: ['Oud', 'Vanilla', 'Bergamot', 'Suede'],
    category: 'Eau de Parfum',
    image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=1200&q=85',
    price: 198,
    rating: 4.8,
    inventory: 36,
    featured: true
  },
  {
    name: 'Maison Bloom',
    slug: 'maison-bloom',
    description: 'A luminous floral perfume with jasmine absolute, pear nectar, musk, and sandalwood.',
    notes: ['Jasmine', 'Pear', 'Musk', 'Sandalwood'],
    category: 'Eau de Parfum',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=85',
    price: 176,
    rating: 4.7,
    inventory: 58,
    featured: true
  }
];

const run = async () => {
  await connectDB();
  await Product.deleteMany();
  await Product.insertMany(products);

  const adminEmail = 'admin@mahoshfragrance.com';
  const existingAdmin = await User.findOne({ email: adminEmail });
  if (!existingAdmin) {
    await User.create({
      name: 'Mahosh Admin',
      email: adminEmail,
      password: 'AdminPass123',
      role: 'admin'
    });
  }

  console.log('Seeded products and default admin account');
  process.exit(0);
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
