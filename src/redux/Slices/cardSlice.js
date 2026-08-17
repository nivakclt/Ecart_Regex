import { createSlice, createSlice } from "@reduxjs/toolkit";

const createSlice=createSlice
name:"cart",
initialState={
    cart:[]
}
reducers:{
    addtoCart:(state,action)=>{
        if(state.cart.find(item)=>item==id.action.payload.id)
            product=state.cart.find(item)=>item==id.action.payload.id
    }
    else{
        state.cart.push[...action.payload.quantity]
    }
}
