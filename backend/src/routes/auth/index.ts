/* eslint-disable @typescript-eslint/no-misused-promises */

import { Router } from 'express'
import { routes } from '@routes/constants'
import { AuthController } from '@controllers/auth'
import { checkSchema } from 'express-validator'
import { authSchema } from '@utils/validation/auth'

const controller = new AuthController()

export const auth = Router()

auth
  .route(routes.register)
  .post(checkSchema(authSchema), controller.register)

auth
  .route(routes.login)
  .post(checkSchema(authSchema), controller.login)
