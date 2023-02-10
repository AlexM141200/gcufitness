// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBj_Hi_r26ScRm4Q7G6EeGP5_LXxtXfADo",

  authDomain: "gcufitnessapp.firebaseapp.com",

  projectId: "gcufitnessapp",

  storageBucket: "gcufitnessapp.appspot.com",

  messagingSenderId: "378242250190",

  appId: "1:378242250190:web:b93b6f106306c64ea1e79f",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
