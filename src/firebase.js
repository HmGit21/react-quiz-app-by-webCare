import { initializeApp } from "firebase/app";

//firebase configuration

const app = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTODMAIN,
  projectId: process.env.REACT_APP_PROJECTiD,
  storageBucket: process.env.REACT_APP_STORAGEbUCKET,
  messagingSenderId: process.env.REACT_APP_MSGsENDERiD,
  appId: process.env.REACT_APP_APPiD,
});

export default app;
