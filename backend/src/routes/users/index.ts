/* eslint-disable @typescript-eslint/no-misused-promises */

import { Router } from 'express'
import { routes } from '@routes/constants'
import { UsersController } from '@controllers/users'

const controller = new UsersController()

export const users = Router()

users
  .route(routes.index)
  .get(controller.index)
  .post(controller.create)

users
  .route(routes.id)
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
