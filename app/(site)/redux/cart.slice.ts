import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers:{
        addToCart:(state :any, action:any) =>{
            const itemExists = state.find((item:any) => item.id === action.payload.id)
            if(itemExists){
                itemExists.quantity++
            }else{
                state.push({...action.payload, quantity: 1})
            }
        },

        incrementQuantity: (state, action) =>{
            const items: any = state.find((item: any) => item.id === action.payload)
            items.quantity++
        },

        decrementQuantity: (state, action) =>{
            const itemDecrement: any = state.find((item: any) => item.id === action.payload)
            if(itemDecrement.quantity === 1){
                const index = state.findIndex((item: any) => item.id === action.payload)
                state.splice(index, 1)
            }else{
                itemDecrement.quantity--;
            }
        },

        removeFromCart: (state, action) =>{
            const index = state.findIndex((item: any) => item.id === action.payload)
            state.splice(index, 1);
        }
    }
})

export const cartReducer = cartSlice.reducer;

export const{
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart
} = cartSlice.actions