import { Router } from 'express'
import { rootRoutes } from './constants'
import { fields } from './fields'

const router = Router()

router.use(rootRoutes.fields, fields)

export default router
