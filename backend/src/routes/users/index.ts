import { Router } from 'express'
import { routes } from '@routes/constants'
import { UsersController } from '@controllers/users'
import { authorize } from '@middleware/auth'

const controller = new UsersController()

export const users = Router()

users
  .route(routes.index)
  .get(controller.index)
  .post(authorize, controller.create)

users
  .route(routes.id)
  .get(controller.read)
  .put(authorize, controller.update)
  .delete(authorize, controller.delete)
