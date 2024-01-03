import { UsersService } from '@services/users'
import { type Request, type Response } from 'express'

const service = new UsersService()

export class UsersController {
  async index (_: Request, res: Response): Promise<void> {
    try {
      console.log(service)
      const data = await service.index()
      res.json(data)
    } catch (e) {
      console.error('error', e)
    }
  }

  async create (req: Request, res: Response): Promise<void> {
    try {
      const data = await service.create(req.body)
      res.json(data)
    } catch (e) {
      console.error('error', e)
    }
  }

  async read (req: Request, res: Response): Promise<void> {
    try {
      const data = await service.read(req.params.id, 'id')
      res.json(data)
    } catch (e) {
      console.error('error', e)
    }
  }

  async update (req: Request, res: Response): Promise<void> {
    try {
      const data = await service.update(req.params.id, req.body)
      res.json(data)
    } catch (e) {
      console.error('error', e)
    }
  }

  async delete (req: Request, res: Response): Promise<void> {
    try {
      const data = await service.delete(req.params.id)
      res.json(data)
    } catch (e) {
      console.error('error', e)
    }
  }
}
