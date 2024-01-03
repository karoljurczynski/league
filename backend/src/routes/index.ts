import { Router } from 'express'
import { routes } from '@routes/constants'
import { users } from '@routes/users'
import { auth } from '@routes/auth'

const router = Router()

router.use(routes.users, users)
router.use(routes.index, auth)

export default router
