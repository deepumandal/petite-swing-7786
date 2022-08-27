import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3jMt-__bVUvM4rZfe-tdMvL8q_8uiWSE",
  authDomain: "bonsai-bf026.firebaseapp.com",
  projectId: "bonsai-bf026",
  storageBucket: "bonsai-bf026.appspot.com",
  messagingSenderId: "567780508308",
  appId: "1:567780508308:web:83d06d351e4e2b491b2a81",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInwithGgogle = async () => {
  let userData = {};
  const data = await signInWithPopup(auth, provider)
    .then((res) => {
      // console.log(res);
      // console.log(res.user.email, res.user.displayName,  res.user.photoURL);
      let name = res.user.displayName;
      let email = res.user.email;
      let imgs = res.user.photoURL;

      localStorage.setItem("user", name);
      localStorage.setItem("email", email);
      localStorage.setItem("imgs", imgs);
      userData = res;
    })
    .catch((err) => console.log(err));
  // console.log(userData);
  return userData;
};
