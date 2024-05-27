// src/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator'; 
import { AuthProvider } from './src/navigation/AuthContext';
import { getApp, getApps, initializeApp } from "firebase/app";
// import firebase from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDWN6yUVv8W-evHDAZigiIwfRZw_Zt4BgQ",
  authDomain: "sanberapp-firebase-auth.firebaseapp.com",
  projectId: "sanberapp-firebase-auth",
  storageBucket: "sanberapp-firebase-auth.appspot.com",
  messagingSenderId: "39238794801",
  appId: "1:39238794801:web:2eef3193b1eda1580e9f10"
};

if (!getApps().length){
const app = initializeApp(firebaseConfig);
console.log(app);
}



const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
