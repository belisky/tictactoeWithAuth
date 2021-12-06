import React from 'react'
import {initializeApp} from 'firebase/app'
import { getAuth } from '@firebase/auth'


const firebaseConfig  = {

            apiKey: "AIzaSyA9cUY55jFYHvaosfiuLItAs1Hei9naZTA",
          
            authDomain: "tictactoe-efbd9.firebaseapp.com",
          
            projectId: "tictactoe-efbd9",
          
            storageBucket: "tictactoe-efbd9.appspot.com",
          
            messagingSenderId: "36422766789",
          
            appId: "1:36422766789:web:ab8b4f9a9849b5c3b560ac"
          
     } 
const app=initializeApp(firebaseConfig)  
export const auth =getAuth(app)
