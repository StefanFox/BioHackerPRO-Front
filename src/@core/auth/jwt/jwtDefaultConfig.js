export default {
  // Endpoints
  loginEndpoint: '/api/v1/auth/token/',
  registerEndpoint: '/jwt/register',
  refreshEndpoint: '/api/v1/auth/token/refresh/',
  logoutEndpoint: '/jwt/logout',

  // This will be prefixed in authorization header with token
  // e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken',
}
