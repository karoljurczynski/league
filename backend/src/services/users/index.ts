import { v4 } from 'uuid'
import { pool } from '@db/index'
import { users } from '@queries/users'
import { type User, type UserRequest } from '@utils/types/users'

export class UsersService {
  async index (): Promise<User[]> {
    const results = await pool.query(users.index)
    return results.rows
  }

  async create (data: UserRequest): Promise<User[]> {
    const { email, name, surname, age } = data
    const results = await pool.query(users.create, [v4(), email, name, surname, age, new Date()])
    return results.rows
  }

  async read (id: string): Promise<User> {
    const results = await pool.query(users.read, [id])
    return results.rows[0]
  }

  async update (id: string, data: UserRequest): Promise<User> {
    const { email, name, surname, age } = data
    const results = await pool.query(users.update, [id, email, name, surname, age, new Date()])
    return results.rows[0]
  }

  async delete (id: string): Promise<User> {
    const results = await pool.query(users.delete, [id])
    return results.rows[0]
  }
}
