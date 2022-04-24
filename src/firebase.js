import { initializeApp } from "firebase/app";

// .env.local er vitor firebase er sob informatio rakhte hobe
//  and oikhn thake eikhne sb use korbo
//  and akhn application er jekono jygy eta ke import kore rkte hobe
//  jate amr ei configuration use korte pari

//firebse configuration
const app = initializeApp({
    apiKey: process.env.REACT_APP_API_KEY ,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN ,
  projectId: process.env.REACT_APP_PROJECT_ID ,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET ,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID ,
  appId: process.env.REACT_APP_APP_ID 
});