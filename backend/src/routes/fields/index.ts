import { Router } from 'express'
import { createFields, getField, getFields } from '../../controllers/fields'
import { rootRoutes } from '../constants'
import { routes } from './constants'

const fields = Router()

fields
  .route(rootRoutes.index)
  .get(getFields)
  .post(createFields)

fields
  .route(routes.fieldId)
  .get(getField)

export { fields }
