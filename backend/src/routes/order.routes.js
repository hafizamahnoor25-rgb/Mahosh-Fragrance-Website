import express from 'express';
import { body } from 'express-validator';
import { checkout, getOrders, myOrders, updateOrderStatus } from '../controllers/order.controller.js';
import { adminOnly, protect } from '../middleware/auth.middleware.js';
import { validate } from '../middleware/validate.middleware.js';

const router = express.Router();

router.use(protect);

router.post(
  '/checkout',
  [
    body('shippingAddress.fullName').trim().notEmpty().withMessage('Full name is required'),
    body('shippingAddress.line1').trim().notEmpty().withMessage('Address is required'),
    body('shippingAddress.city').trim().notEmpty().withMessage('City is required'),
    body('shippingAddress.country').trim().notEmpty().withMessage('Country is required'),
    validate
  ],
  checkout
);
router.get('/mine', myOrders);
router.get('/', adminOnly, getOrders);
router.patch(
  '/:id/status',
  [
    adminOnly,
    body('status')
      .isIn(['pending', 'paid', 'processing', 'shipped', 'delivered', 'cancelled'])
      .withMessage('Invalid order status'),
    validate
  ],
  updateOrderStatus
);

export default router;
