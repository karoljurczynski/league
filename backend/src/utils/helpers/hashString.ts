import crypto from 'crypto'

export const hashString = (string: string): string => crypto.createHmac('sha256', string).digest('hex')
