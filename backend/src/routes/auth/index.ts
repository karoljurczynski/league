/* eslint-disable @typescript-eslint/no-misused-promises */

import { Router } from 'express'
import { routes } from '@routes/constants'
import { AuthController } from '@controllers/auth'

const controller = new AuthController()

export const auth = Router()

auth
  .route(routes.register)
  .post(controller.register)

auth
  .route(routes.login)
  .post(controller.login)
