import { type ValidationError } from 'express-validator'

export type Errors = ValidationError[] | string[]

export interface ResponseObject<T> {
  success: boolean
  errors?: Errors
  data?: T
}
