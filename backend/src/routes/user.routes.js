import express from 'express';
import { body } from 'express-validator';
import { deleteUser, getUsers, updateUserRole } from '../controllers/user.controller.js';
import { adminOnly, protect } from '../middleware/auth.middleware.js';
import { validate } from '../middleware/validate.middleware.js';

const router = express.Router();

router.use(protect, adminOnly);

router.get('/', getUsers);
router.patch(
  '/:id/role',
  [body('role').isIn(['customer', 'admin']).withMessage('Invalid role'), validate],
  updateUserRole
);
router.delete('/:id', deleteUser);

export default router;
