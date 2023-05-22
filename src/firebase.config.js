import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { initializeAppQr } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyD_bxGG0WgOKDejZvER2fTq2xZZjfUs8zs",
  authDomain: "restaurantapp-c2ed6.firebaseapp.com",
  databaseURL: "https://restaurantapp-c2ed6-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-c2ed6",
  storageBucket: "restaurantapp-c2ed6.appspot.com",
  messagingSenderId: "174416156605",
  appId: "1:174416156605:web:2ec169ea4ef3e7bb25e4d4",
  // apiKey: "AIzaSyAOxBety2mEPTt8DbwxcpPVJe7zuLInX4U",
  // authDomain: "qrcode-d835c.firebaseapp.com",
  // projectId: "qrcode-d835c",
  // storageBucket: "qrcode-d835c.appspot.com",
  // messagingSenderId: "38289849200",
  // appId: "1:38289849200:web:c8ee30b614369c72fd2db5",
  // measurementId: "G-863LEVS5QH"
};

  // Initialize Firebase
  // const appqr = initializeAppQr(firebaseConfig);
  // const analytics = getAnalytics(appqr);

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
