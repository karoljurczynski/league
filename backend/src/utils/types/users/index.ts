export interface UserRequest {
  email: string
  name: string
  surname: string
  age: number
}

export interface User extends UserRequest {
  id: string
  createdAt: string
  updatedAt: string
}
