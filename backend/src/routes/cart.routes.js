import express from 'express';
import { body } from 'express-validator';
import { addToCart, clearCart, getCart, removeCartItem, updateCartItem } from '../controllers/cart.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import { validate } from '../middleware/validate.middleware.js';

const router = express.Router();

router.use(protect);

router.get('/', getCart);
router.post(
  '/',
  [
    body('productId').isMongoId().withMessage('Valid product ID is required'),
    body('quantity').optional().isInt({ min: 1 }).withMessage('Quantity must be at least 1'),
    validate
  ],
  addToCart
);
router.put(
  '/:productId',
  [body('quantity').isInt({ min: 1 }).withMessage('Quantity must be at least 1'), validate],
  updateCartItem
);
router.delete('/:productId', removeCartItem);
router.delete('/', clearCart);

export default router;
