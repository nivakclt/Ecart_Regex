import { createSlice } from "@reduxjs/toolkit";
import swal from 'sweetalert2'


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
                // alert("Item Added to Wishlist")
                swal.fire({
                    title: 'Item Added to Wishlist',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
        },
        removedFromWishlist:(state,action)=>{
            state.wishlist=state.wishlist.filter(item=>item.id!==action.payload)
            // alert("Item Removed")
            swal.fire({
                title: 'Item Removed from Wishlist',
                icon: 'success',
                confirmButtonText: 'OK'
              })
        }
    }
})

export default wishlistSlice.reducer
export const {addtoWishlist, removedFromWishlist} = wishlistSlice.actions