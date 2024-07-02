import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  where,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7sExMlaS4X-ReZV4mJb1jQS2LjORcsew",
  authDomain: "apitestcase-14266.firebaseapp.com",
  databaseURL:
    "https://apitestcase-14266-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "apitestcase-14266",
  storageBucket: "apitestcase-14266.appspot.com",
  messagingSenderId: "1068006808791",
  appId: "1:1068006808791:web:697cedf5d74084cab62492",
  measurementId: "G-RW0BF0Y9RF",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
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

async function sendMessage(roomId, user, text) {
  try {
    await addDoc(collection(db, "chat-rooms", roomId, "messages"), {
      uid: user.uid,
      displayName: user.displayName,
      text: text.trim(),
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error(error);
  }
}

function getMessages(roomId, callback) {
  return onSnapshot(
    query(
      collection(db, "chat-rooms", roomId, "messages"),
      orderBy("timestamp", "asc")
    ),
    (querySnapshot) => {
      const messages = querySnapshot.docs.map((x) => ({
        id: x.id,
        ...x.data(),
      }));

      callback(messages);
    }
  );
}

export { sendMessage, getMessages };
