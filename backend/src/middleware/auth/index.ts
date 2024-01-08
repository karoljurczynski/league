import { verifyJwt } from '@utils/helpers/jwt'
import { type NextFunction, type Request, type Response } from 'express'

export const authorize = async (req: Request & { user?: string }, res: Response, next: NextFunction) => {
  const notAuthorized = (): Response<any, Record<string, any>> => res.status(403).json({ success: false, error: 'Not authorized!' })

  try {
    const user = verifyJwt(req.header('Authorization'))
    if (!user) return notAuthorized()
    req.user = user
    next()
  } catch (e) {
    return notAuthorized()
  }
}
