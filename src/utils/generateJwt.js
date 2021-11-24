import jwt from "jsonwebtoken";

export default function generateJwt(fields) {
  if (typeof fields !== 'object') {
    throw 'Invalid JWT fields'
  }
  let token = jwt.sign(fields, 'shhhhh');
  return token
}