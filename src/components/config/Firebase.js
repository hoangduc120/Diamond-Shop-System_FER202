// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc, updateDoc, doc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7sExMlaS4X-ReZV4mJb1jQS2LjORcsew",
  authDomain: "apitestcase-14266.firebaseapp.com",
  databaseURL: "https://apitestcase-14266-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "apitestcase-14266",
  storageBucket: "apitestcase-14266.appspot.com",
  messagingSenderId: "1068006808791",
  appId: "1:1068006808791:web:697cedf5d74084cab62492",
  measurementId: "G-RW0BF0Y9RF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      const docRef = await addDoc(collection(db, "users"), {
        user_id: user.uid,
        fullname: user.displayName,
        gender: "",
        avatar: user.photoURL,
        email: user.email,
        account_status: "",
        auth: "",
        authProvider: "google",
        phone: "",
        address_shipping: "",
        role: "",
      });
      console.log(user.getIdToken)
      console.log("Document written with ID: ", docRef.id);
      await updateDoc(doc(db, "users", docRef.id), {
        user_id: docRef.id,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    const docRef = await addDoc(collection(db, "users"), {
      user_id: user.uid,
      fullname: name,
      gender: "",
      avatar: "",
      email: "",
      account_status: "",
      auth: "",
      authProvider: "local",
      phone: "",
      address_shipping: "",
      role: "",
    });

    await updateDoc(doc(db, "users", docRef.id), {
      user_id: docRef.id,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
    // test
  }
};
const logout = () => {
  signOut(auth);
};
export { auth, db, signInWithGoogle, logInWithEmailAndPassword, registerWithEmailAndPassword, sendPasswordReset, logout };

//TODO: "account_status", "role" is bool