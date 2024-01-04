import jwt from 'jsonwebtoken'
import { configDotenv } from 'dotenv'

configDotenv()

const secret = process.env.JWT_SECRET!

export const generateJwt = (userId: string): string => {
  const payload = { user: userId }
  return jwt.sign(payload, secret, { expiresIn: '24h' })
}

export const verifyJwt = (header?: string): string | false => {
  if (!header) return false
  const parsedToken = header.split('Bearer')[1].trim()
  const payload = jwt.verify(parsedToken, secret)
  return typeof payload !== 'string' ? payload.user as string : false
}
