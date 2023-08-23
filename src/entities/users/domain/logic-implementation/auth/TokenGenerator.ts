import { type Interfaces } from 'entities/users/domain'

export interface TokenGenerator {
  generateTokens: (property: string) => Interfaces.Tokens
  generateAccessToken: (property: string) => Interfaces.Tokens['accessToken']
  generateRefreshToken: (property: string) => Interfaces.Tokens['refreshToken']
  verifyToken: any
}
