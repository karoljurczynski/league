import { Router } from 'express'
import { routes } from '@routes/constants'
import { users } from '@routes/users'
import { auth } from '@routes/auth'
import { validation } from '@middleware/validation'

const router = Router()

router.use(routes.index, auth)
router.use(routes.users, users)

router.use(validation)

export default router
