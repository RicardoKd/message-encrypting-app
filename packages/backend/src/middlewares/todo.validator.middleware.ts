import { Response, Request, NextFunction } from 'express';
import * as Yup from 'yup';

export const createBodyValidator =
  <T>(schema: Yup.Schema<T>) =>
  (req: Request, res: Response, next: NextFunction) => {
    schema
      .validate(req.body, { abortEarly: false })
      .then(() => next())
      .catch((error: Yup.ValidationError) => {
        const errors = error.inner.map((e) => ({
          field: e.path,
          message: e.message
        }));

        return res.status(400).json({ errors });
      });
  };

export const createParamsValidator =
  <T>(schema: Yup.Schema<T>) =>
  (req: Request, res: Response, next: NextFunction) => {
    schema
      .validate(req.params, { abortEarly: false })
      .then(() => next())
      .catch((error: Yup.ValidationError) => {
        const errors = error.inner.map((e) => ({
          field: e.path,
          message: e.message
        }));

        return res.status(400).json({ errors });
      });
  };
