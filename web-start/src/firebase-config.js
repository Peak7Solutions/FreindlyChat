/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyClE9cDdcmuFyi8o7yfTFmXmXVwP_1BkdU",
  authDomain: "friendlychat-38ea5.firebaseapp.com",
  projectId: "friendlychat-38ea5",
  storageBucket: "friendlychat-38ea5.appspot.com",
  messagingSenderId: "161923841587",
  appId: "1:161923841587:web:87c0342c5e6bcc3431ad46"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}