import { Router } from 'express'
import { routes } from '@routes/constants'
import { users } from '@routes/users'
import { auth } from '@routes/auth'

const router = Router()

router.use(routes.index, auth)
router.use(routes.users, users)

export default router
