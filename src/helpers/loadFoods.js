import { collection, getDocs } from "firebase/firestore/lite"
import { firebaseDB } from "../firebase/config"

export const loadFoods = async(uid='')=>{
    if(!uid) throw new Error('El UID del usuario no existe');
    const collectionRef = collection(firebaseDB, `${uid}/foodsApp/foods`);
    const docs = await getDocs(collectionRef);
    const foods = [];
    docs.forEach(doc=>{
        foods.push({id:doc.id, ...doc.data()})
    })
    return foods;
}

