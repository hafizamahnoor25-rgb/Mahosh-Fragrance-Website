import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
      maxlength: 120
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      maxlength: 1200
    },
    notes: {
      type: [String],
      default: []
    },
    category: {
      type: String,
      enum: ['Eau de Parfum', 'Extrait', 'Discovery Set', 'Home Fragrance'],
      default: 'Eau de Parfum'
    },
    image: {
      type: String,
      required: [true, 'Image URL is required']
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: 0
    },
    rating: {
      type: Number,
      default: 5,
      min: 0,
      max: 5
    },
    inventory: {
      type: Number,
      default: 0,
      min: 0
    },
    featured: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

productSchema.index({ name: 'text', description: 'text', notes: 'text' });

export default mongoose.model('Product', productSchema);
