import firebase from 'firebase-admin'
import config from '../config/config.js'

const firebaseConfig = firebase.initializeApp(config.firebaseConfig)
const storage = firebaseConfig.storage()
const auth = firebaseConfig.auth()
const db = firebaseConfig.firestore()

export { storage, db, auth }
