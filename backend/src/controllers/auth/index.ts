import { UsersService } from '@services/users'
import { hash } from '@utils/helpers/crypto'
import { generateJwt } from '@utils/helpers/jwt'
import { type AuthRequest } from '@utils/types/auth'
import { type Request, type Response } from 'express'

const usersService = new UsersService()

export class AuthController {
  async register (req: Request, res: Response): Promise<void> {
    try {
      const { email, password: rawPassword } = req.body
      const user = await usersService.read(email, 'email')
      if (user !== undefined) {
        res.status(401).json({ success: false })
      } else {
        console.log('test')
        const password = hash(rawPassword)
        const newUser = await usersService.create({ email, password })
        const token = generateJwt(newUser.id)
        res.setHeader('Authorization', token).status(200).json({ success: true, data: newUser })
      }
    } catch (e) {
      console.error('error', e)
    }
  }

  async login (req: Request<Record<string, unknown>, Record<string, unknown>, AuthRequest>, res: Response): Promise<void> {
    try {
      const { email, password: rawPassword } = req.body
      const user = await usersService.read(email, 'email')
      if (user === undefined) {
        res.status(404).json({ success: false })
      } else {
        const { password: userPassword } = user
        const password = hash(rawPassword)
        if (password === userPassword) {
          const token = generateJwt(user.id)
          res.setHeader('Authorization', token).status(200).json({ success: true, data: user })
        } else {
          res.status(401).json({ success: false })
        }
      }
    } catch (e) {
      console.error('error', e)
    }
  }
}
