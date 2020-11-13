import mysql from './mysql'
import jwt from './jwt'
import uploadConfig from './upload'
import redisConfig from './redis'
import { Console } from 'console'
const appConfig = [mysql, redisConfig, jwt, uploadConfig]
console.log(process.env, 'o')
export default appConfig
