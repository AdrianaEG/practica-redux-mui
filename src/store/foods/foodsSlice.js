import { createSlice } from '@reduxjs/toolkit';
export const foodsSlice = createSlice({
    name: 'foods',
    initialState: {
        isSaving: false,
        messageSaved: '',
        foods: [],
        active: null, //id, title, body, imagesURL, ingredients, recipe
    },
    reducers: {
        addNewEmptyFood: (state, action ) => {
            state.foods.push(action.payload);
            state.isSaving=false;
        },
        savingFood: (state)=>{
            state.isSaving = true;
        },
        setActiveFood: (state, action)=>{
            state.active = action.payload;
            state.messageSaved='';
        },
        setFoods:(state, action)=>{
            state.foods = action.payload
        },
        setSaving:(state)=>{
            state.isSaving=true;
            state.messageSaved='';
        },
        updateFood: (state, action)=>{
            state.isSaving=false,
            state.foods = state.foods.map(food=>{
                if(food.id === action.payload.id){
                    return action.payload;
                }
                return food;
            });
            state.messageSaved = `${action.payload.title}, actualizada correctamente`
        },
        setPhotosToActiveFood: (state, action)=>{
            state.isSaving=false;
            state.active.imagesURL = [...state.active.imagesURL, ...action.payload]
        },
        clearFoodsLogout: (state)=>{
            state.isSaving= false;
            state.messageSaved= '';
            state.foods= [];
            state.active= null
        },
        deleteFoodById: (state, action)=>{
            state.active = null;
            state.foods = state.foods.filter( food => food.id !== action.payload.id );
        }

    }
});
export const { addNewEmptyFood, clearFoodsLogout, savingFood, setActiveFood,setPhotosToActiveFood, setFoods, setSaving, updateFood, deleteFoodById } = foodsSlice.actions;