export default async () => {
  const firebase = require('firebase')

  try {
    firebase.initializeApp({
      databaseURL: 'https://hacker-news.firebaseio.com'
    })
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)
    }
  }

  return firebase.database().ref('v0')
}