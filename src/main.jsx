import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.css'
import { ChakraProvider } from '@chakra-ui/react'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVKwvpDrPtUda_Cqa7QBcInIp4_ye3m-c",
  authDomain: "curso-react-paintstore.firebaseapp.com",
  projectId: "curso-react-paintstore",
  storageBucket: "curso-react-paintstore.appspot.com",
  messagingSenderId: "781334125625",
  appId: "1:781334125625:web:da060d45442b086ee501e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
)
