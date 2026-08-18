import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice=createSlice({
    name:"wishlist",
    initialState:{
        wishlist:[]
    },
    reducers:{
        addtoWishlist:(state,action)=>{
            if(state.wishlist.find(item=>item.id===action.payload.id)){
                alert("Item Already Exist in Wishlist!")
            }else{
                state.wishlist.push(action.payload)
                alert("Item Added to Wishlist")
            }
        },
        removedFromWishlist:(state,action)=>{
            state.wishlist=state.wishlist.filter(item=>item.id!==action.payload)
            alert("Item Removed")
        }
    }
})

export default wishlistSlice.reducer
export const {addtoWishlist, removedFromWishlist} = wishlistSlice.actions