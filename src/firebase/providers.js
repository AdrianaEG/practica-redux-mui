import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth"
import { firebaseAuth } from "./config"
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async()=>{
    try{
        const result = await signInWithPopup(firebaseAuth, googleProvider);
        const {displayName, email, photoURL, uid} = result.user;
        return{
            ok: true,
            displayName,
            email, 
            photoURL,
            uid
        }
    }
    catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        return{
            ok: false,
            errorMessage,
        }
    }
}

export const registerUserWithEmailPassword = async({email, password, displayName})=>{
    try{
        const resp = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const {uid, photoUrl} = resp.user;
        await updateProfile(firebaseAuth.currentUser, {
            displayName
        });
        return{
            ok:true,
            uid, photoUrl, email, displayName
        }
    }
    catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        return{
            ok: false,
            errorMessage,
        }
    }
}

export const loginWithEmailPassword = async({email, password})=>{
    try{
        const resp = await signInWithEmailAndPassword(firebaseAuth, email, password);
        const {uid, photoUrl, displayName} = resp.user;
        return{
            ok:true,
            uid, photoUrl, email, displayName
        }
    }
    catch(error){
        return{
            ok: false,
            errorMessage: 'El usuario no existe'
        }
    }
    
}

export const logoutFirebase = async()=>{
    return await firebaseAuth.signOut();
}