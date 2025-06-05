import * as jwt from 'jsonwebtoken'

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split('')[0]
  if (!token) {
    //TODO: handle some error here
  }
  
}