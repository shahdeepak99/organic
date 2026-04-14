import mongoose, { Document, Model } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  slug: string;
  price: number;
  description: string;
  stock: number;
  imageUrl: string;
  category: string;
  unit: string;
  weight: string;
  featured: boolean;
  discount: number;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new mongoose.Schema<IProduct>({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: 0,
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  stock: {
    type: Number,
    required: [true, 'Stock quantity is required'],
    min: 0,
    default: 0,
  },
  imageUrl: {
    type: String,
    required: [true, 'Image is required'],
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['ghee', 'gud', 'pulses', 'oils'],
  },
  unit: {
    type: String,
    required: true,
    default: 'kg',
  },
  weight: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  discount: {
    type: Number,
    default: 0,
    min: 0,
    max: 100,
  },
}, {
  timestamps: true,
});

productSchema.index({ name: 'text', description: 'text' });

const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>('Product', productSchema);

export default Product;