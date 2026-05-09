import express from 'express';
import { body } from 'express-validator';
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct
} from '../controllers/product.controller.js';
import { adminOnly, protect } from '../middleware/auth.middleware.js';
import { validate } from '../middleware/validate.middleware.js';

const router = express.Router();

const productRules = [
  body('name').trim().isLength({ min: 2 }).withMessage('Product name is required'),
  body('description').trim().isLength({ min: 20 }).withMessage('Description must be detailed'),
  body('image').isURL().withMessage('Image must be a valid URL'),
  body('price').isFloat({ min: 0 }).withMessage('Price must be positive'),
  body('rating').optional().isFloat({ min: 0, max: 5 }).withMessage('Rating must be between 0 and 5'),
  body('inventory').optional().isInt({ min: 0 }).withMessage('Inventory cannot be negative'),
  validate
];

router.get('/', getProducts);
router.get('/:slug', getProduct);
router.post('/', protect, adminOnly, productRules, createProduct);
router.put('/:id', protect, adminOnly, productRules, updateProduct);
router.delete('/:id', protect, adminOnly, deleteProduct);

export default router;
