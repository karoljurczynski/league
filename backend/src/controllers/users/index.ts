import { UsersService } from '@services/users'
import { type Request, type Response } from 'express'

export class UsersController {
  private readonly service = new UsersService()

  async index (_: Request, res: Response): Promise<void> {
    try {
      const data = await this.service.index()
      res.json(data)
    } catch (e) {
      console.error('error', e)
    }
  }

  async create (req: Request, res: Response): Promise<void> {
    try {
      const data = await this.service.create(req.body)
      res.json(data)
    } catch (e) {
      console.error('error', e)
    }
  }

  async read (req: Request, res: Response): Promise<void> {
    try {
      const data = await this.service.read(req.params.id)
      res.json(data)
    } catch (e) {
      console.error('error', e)
    }
  }

  async update (req: Request, res: Response): Promise<void> {
    try {
      const data = await this.service.update(req.params.id, req.body)
      res.json(data)
    } catch (e) {
      console.error('error', e)
    }
  }

  async delete (req: Request, res: Response): Promise<void> {
    try {
      const data = await this.service.delete(req.params.id)
      res.json(data)
    } catch (e) {
      console.error('error', e)
    }
  }
}
