import React from 'react'
import {initializeApp} from 'firebase/app'
import { getAuth } from '@firebase/auth'

const { REACT_APP_FIREBASE_API_KEY,
     REACT_APP_FIREBASE_DOMAIN,           
     REACT_APP_FIREBASE_ID,
     REACT_APP_FIREBASE_BUCKET,
     REACT_APP_FIREBASE_PROJECTID,
     REACT_APP_FIREBASE_SENDERID}=process.env
const firebaseConfig  = {
     

            apiKey: REACT_APP_FIREBASE_API_KEY,
          
            authDomain: REACT_APP_FIREBASE_DOMAIN,
          
            projectId: REACT_APP_FIREBASE_PROJECTID,
          
            storageBucket: REACT_APP_FIREBASE_BUCKET,
          
            messagingSenderId: REACT_APP_FIREBASE_SENDERID,
          
            appId: REACT_APP_FIREBASE_ID
          
     } 
const app=initializeApp(firebaseConfig)  
export const auth =getAuth(app)
