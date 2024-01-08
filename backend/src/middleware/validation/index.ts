import { type NextFunction, type Request, type Response } from 'express'
import { validationResult } from 'express-validator'

export const validation = (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    res.status(422).json({ success: false, errors: errors.array() })
    return
  }

  next()
}
