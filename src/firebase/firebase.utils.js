import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAf7cULNoI0L1zQ0Hr0mjAJalPU5U4eYA8',
  authDomain: 'crwn-clothing-584b8.firebaseapp.com',
  projectId: 'crwn-clothing-584b8',
  storageBucket: 'crwn-clothing-584b8.appspot.com',
  messagingSenderId: '509609926496',
  appId: '1:509609926496:web:0b73df28b26c69c78f0805',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});
export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore(firebaseApp);

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  console.log(userDocRef);
};
