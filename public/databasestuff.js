import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// TODO: Replace with your app's Firebase project configuration
const firebaseConfig = {
  authDomain: "thestartoflife.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://thestartoflife-default-rtdb.firebaseio.com/",
  projectId: "thestartoflife",
  storageBucket: "thestartoflife.appspot.com",

  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);