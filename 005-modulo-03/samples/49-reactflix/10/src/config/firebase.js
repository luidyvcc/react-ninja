'use strict'

import firebase from 'firebase/app'
import 'firebase/database'

firebase.initializeApp({
  apiKey: 'AIzaSyANc5DYbvoEq8lKVBxLA1_pvjenlQGrTYQ',
  authDomain: 'reactflix-301c7.firebaseapp.com',
  databaseURL: 'https://reactflix-301c7-default-rtdb.firebaseio.com',
  projectId: 'reactflix-301c7',
  storageBucket: 'reactflix-301c7.appspot.com',
  messagingSenderId: '432644305034',
  appId: '1:432644305034:web:a169fd58fba733bfde7d73',
  measurementId: 'G-60V33EC2BE'
})

const db = firebase.database()

export { db }
