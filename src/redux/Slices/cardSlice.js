import { createSlice } from "@reduxjs/toolkit";
import swal from 'sweetalert2'


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart: [ ]
    },

    reducers:{
        addtoCart: (state,action) => {
         if(state.cart.find(item=> item.id == action.payload.id)){
            const product=state.cart.find(item=>item.id == action.payload.id);
            product.quantity +=1;
            // alert("Item Quantity Added")
            swal.fire({
                title: 'Item Quantity Added',
                icon: 'success',
                confirmButtonText: 'OK'
              })
         }
        else {
            state.cart.push({...action.payload, quantity: 1});
        }
        // alert("Item added to Cart")
        swal.fire({
            title: 'Item Added to Cart',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        }
    },
    

    removeFromCart:(state,action)=>{
        state.cart=state.cart.filter((item) => item.id!=action.payload)
        alert("item removed")
    },
    increaseQuantity:(state,action)=>{
        const product=state.cart.find(item=>item.id==action.payload)
        product.quantity+=1
        
    },
    decreaseQuantity:(state,action)=>{
        const product=state.cart.find(item=>item.id==action.payload)
        if(product.quantity==1){
                    state.cart=state.cart.filter((item) => item.id!=action.payload)
                    
        }else{
            product.quantity-=1
        }
    },
    checkout:(state,action)=>{
        state.cart=[]
    }
    },
)

export const { addtoCart , removeFromCart,increaseQuantity,decreaseQuantity,checkout } = cartSlice.actions;
export default cartSlice.reducer;