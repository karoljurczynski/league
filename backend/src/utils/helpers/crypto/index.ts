import crypto from 'crypto'

export const hash = (password: string): string => {
  return crypto.createHmac('sha256', password, { }).digest('hex')
}