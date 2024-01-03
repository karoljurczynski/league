import { UsersService } from '@services/users'
import { hashString } from '@utils/helpers/hashString'
import { type AuthRequest } from '@utils/types/auth'
import { type Request, type Response } from 'express'

const usersService = new UsersService()

export class AuthController {
  async register (req: Request, res: Response): Promise<void> {
    try {
      const { email, password: rawPassword } = req.body as AuthRequest
      const user = await usersService.read(email, 'email')
      if (user !== undefined) {
        res.status(401).json({ success: false, error: 'User already exist!' })
      } else {
        const password = hashString(rawPassword)
        const newUser = await usersService.create({ email, password })
        res.status(200).json({ success: true, data: newUser })
      }
    } catch (e) {
      console.error('error', e)
    }
  }

  async login (req: Request, res: Response): Promise<void> {
    try {
      const { email, password: rawPassword } = req.body as AuthRequest
      const user = await usersService.read(email, 'email')
      if (user === undefined) {
        res.status(404).json({ success: false, error: 'User does not exist!' })
      } else {
        const { password: userPassword } = user
        const password = hashString(rawPassword)
        if (password === userPassword) {
          res.status(200).json({ success: true, data: user })
        } else {
          res.status(401).json({ success: false, error: 'Wrong email or password!' })
        }
      }
    } catch (e) {
      console.error('error', e)
    }
  }
}
