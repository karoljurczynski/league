import { type Request, type Response } from 'express'
import { generateFields } from '../../services/fields'

export const getFields = (req: Request, res: Response): void => {
  res.json(generateFields())
}

export const getField = (req: Request, res: Response): void => {
  res.json(generateFields())
}

export const createFields = (req: Request, res: Response): void => {
  res.json(generateFields())
}
