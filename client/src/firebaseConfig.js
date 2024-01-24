// Firebase Configuration

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBYjfyEN_yQQy_rzBKYEc2PLtm1KZ5yLhs',
  authDomain: 'noted-12128.firebaseapp.com',
  projectId: 'noted-12128',
  storageBucket: 'noted-12128.appspot.com',
  messagingSenderId: '526782222060',
  appId: '1:526782222060:web:8d4b26734545af1ef31fc9',
  measurementId: 'G-HZ1WRW7NN4'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default auth
