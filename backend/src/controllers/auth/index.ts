import { UsersService } from '@services/users'
import { hashString } from '@utils/helpers/hashString'
import { type UserRequest } from '@utils/types/users'
import { type Request, type Response } from 'express'

const usersService = new UsersService()

export class AuthController {
  async register (req: Request, res: Response): Promise<void> {
    try {
      const { email, password, ...rest } = req.body as UserRequest
      const data = await usersService.read(email, 'email')
      if (data !== undefined) res.status(401).json({ success: false, errors: 'User already exist!' })
      const hashedPassword = hashString(password)
      const newUser = await usersService.create({ email, password: hashedPassword, ...rest })
      res.status(200).json({ success: true, data: newUser })
    } catch (e) {
      console.error('error', e)
    }
  }

  async login (req: Request, res: Response): Promise<void> {
    try {
      // const data = await this.service.create(req.body)
      // res.json(data)
    } catch (e) {
      console.error('error', e)
    }
  }
}
