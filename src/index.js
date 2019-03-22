import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAVuADVUSzOLI_yptrWh-XNXhMoG0C1efo",
  authDomain: "react-plus-react-native.firebaseapp.com",
  databaseURL: "https://react-plus-react-native.firebaseio.com",
  projectId: "react-plus-react-native",
  storageBucket: "react-plus-react-native.appspot.com",
  messagingSenderId: "968429358438"
};

firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
