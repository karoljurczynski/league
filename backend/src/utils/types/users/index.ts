import { type AuthRequest } from '@utils/types/auth'

export interface UserRequest extends AuthRequest {
  name?: string
  surname?: string
  age?: number
}

export interface User extends UserRequest {
  id: string
  createdAt: string
  updatedAt: string
}
