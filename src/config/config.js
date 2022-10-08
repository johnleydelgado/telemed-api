import dotenv from 'dotenv'
import assert from 'assert'
import admin from 'firebase-admin'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const serviceAccount = require('../config/telemed-18006-firebase-adminsdk-6m03w-60404d2581.json')
// import serviceAccount from ''
dotenv.config()

const {
  PORT,
  HOST,
  HOST_URL,
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} = process.env

assert(PORT, 'PORT is required')
assert(HOST, 'HOST is required')

const config = {
  port: PORT,
  host: HOST,
  url: HOST_URL,
  firebaseConfig: {
    credential: admin.credential.cert(serviceAccount),
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
  },
}

export default config
