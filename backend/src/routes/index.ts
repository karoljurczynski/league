import { Router } from 'express'
import { routes } from '@routes/constants'
import { users } from '@routes/users'

const router = Router()

router.use(routes.users, users)

export default router
