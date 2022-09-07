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
        deleteFoodById: (state)=>{

        }

    }
});
export const { addNewEmptyFood, savingFood, setActiveFood, setFoods, setSaving, updateFood, deleteFoodById } = foodsSlice.actions;