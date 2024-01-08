import { pool } from '@db/index'
import { users } from '@queries/users'
import { type AuthRequest } from '@utils/types/auth'
import { type User, type UserRequest } from '@utils/types/users'

export class UsersService {
  async index (): Promise<User[]> {
    const results = await pool.query(users.index)
    return results.rows
  }

  async create (data: UserRequest | AuthRequest): Promise<User> {
    const { email, password, name, surname, age } = data as UserRequest
    const results = await pool.query(users.create, [email, password, name, surname, age, new Date().toISOString()])
    return results.rows[0]
  }

  async read (data: string, prop: 'id' | 'email'): Promise<User | undefined> {
    const results = await pool.query(users.readBy(prop), [data])
    return results.rows[0]
  }

  async update (id: string, data: UserRequest): Promise<User> {
    const { name, surname, age } = data
    const results = await pool.query(users.update, [id, name, surname, age, new Date().toISOString()])
    return results.rows[0]
  }

  async delete (id: string): Promise<User> {
    const results = await pool.query(users.delete, [id])
    return results.rows[0]
  }
}
