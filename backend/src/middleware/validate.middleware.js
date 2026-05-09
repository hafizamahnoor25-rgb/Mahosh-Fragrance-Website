import { validationResult } from 'express-validator';

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();

  res.status(422).json({
    message: 'Invalid request data',
    errors: errors.array().map((error) => ({
      field: error.path,
      message: error.msg
    }))
  });
};
