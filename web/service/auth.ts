import { post } from './base'

interface RegisterParams {
  email: string
  password: string
  name: string
}

export const register = (params: RegisterParams) => {
  return post('/auth/register', params)
} 