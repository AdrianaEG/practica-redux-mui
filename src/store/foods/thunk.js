import { async } from "@firebase/util";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { firebaseDB } from "../../firebase/config";
import { fileUpload } from "../../helpers/fileUpload";
import { loadFoods } from "../../helpers/loadFoods";
import { addNewEmptyFood, savingFood, setActiveFood, setPhotosToActiveFood, setFoods, setSaving, updateFood, deleteFoodById } from "./foodsSlice"

export const startNewFood = ()=>{
    return async(dispatch, getState)=>{
        dispatch(savingFood());
        const {uid} = getState().auth;
        const newFood = {
            title: '',
            body: '',
            imagesURL: [],
            ingredients: '',
            recipe: ''
        }
        const newDoc = doc(collection(firebaseDB, `${uid}/foodsApp/foods`));
        await setDoc(newDoc, newFood);
        newFood.id = newDoc.id;
        dispatch(addNewEmptyFood(newFood));
        dispatch(setActiveFood(newFood));
    }
}

export const startLoadingFoods = ()=>{
    return async(dispatch, getState)=>{
        const {uid} = getState().auth;
        if(!uid) throw new Error('El UID del usuario no existe');
        const foods = await loadFoods(uid);
        dispatch(setFoods(foods));
    }
}

export const startSaveFoods = ()=>{
    return async(dispatch, getState)=>{
        dispatch(setSaving());
        const {uid} = getState().auth;
        const {active} = getState().foods
        
        const foodToFirestore = {...active};
        delete foodToFirestore.id;
        const docRef = doc(firebaseDB, `${uid}/foodsApp/foods/${active.id}`);
        await setDoc(docRef, foodToFirestore, {merge: true})
        dispatch(updateFood(active));
    }
}

export const startUploadingFiles = (files=[])=>{
    return async(dispatch)=>{
        dispatch(setSaving());
        const filesUploadPromises = [];
        
        for (const file of files) {
            filesUploadPromises.push(fileUpload(file))
        }
        const photosURL = await Promise.all(filesUploadPromises);
        console.log(photosURL);
        dispatch(setPhotosToActiveFood(photosURL))
    }
}

export const startDeleteFood = (food={})=>{
    return async(dispatch, getState)=>{
        const {uid} = getState().auth;
        const docRef = doc(firebaseDB, `${uid}/foodsApp/foods/${food.id}`);
        await deleteDoc(docRef);
        dispatch(deleteFoodById(food))
    }
}