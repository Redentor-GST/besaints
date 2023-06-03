import { initializeApp } from 'firebase/app'
import service from './google-services.json'
import { admin } from 'firebase-admin'
import { getFunctions } from 'firebase/functions'

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/storage";

// Initialize Firebase

const app = initializeApp({
  credential: admin.credential.cert(service),
})
export const functions = getFunctions(app)

console.log('Initialized firebase')
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
