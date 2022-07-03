import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
import { firebaseConfig } from '../configs/firebase';


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

const handleUserProfile = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const { uid } = userAuth;

    const userRef = firestore.doc(`users/${uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const timeStamp = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdDate: timeStamp,
                ...additionalData
            })
        } catch (error) {

        }

    }

    return userRef;
}

export {auth,firebase,firestore,handleUserProfile}