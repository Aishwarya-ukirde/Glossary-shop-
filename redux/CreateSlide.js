import { createSlice } from '@reduxjs/toolkit'

const initialState={
    productList:[],
    cartItem:[]
}
export const ProductSlice=createSlice({
    name:"product",
    initialState,
    reducers:{
        setDataProduct:(state,action)=>{
            console.log(action)
            state.productList=[...action.payload]
        },
        addCartItem:(state,action)=>{
            const check=state.cartItem.some(el=>el._id===action.payload._id)
            console.log(check)
            if(check){
                alert("already in cart")
            }
            else{
                alert("Item addded succesfully..")
                const total=action.payload.price

            state.cartItem=[...state.cartItem,{...action.payload,qty:1,total:total}]


            }
            

            
            
        },
        deleteCartItem:(state,action)=>{
            console.log(action.payload)
            alert("one item is deleted")
            const index=state.cartItem.findIndex((el)=>el._id===action.payload)
            state.cartItem.splice(index,1)
            console.log(index)
        },
        increaseQty:(state,action)=>{
            const index=state.cartItem.findIndex((el)=>el._id===action.payload)
            var qty=state.cartItem[index].qty
            state.cartItem[index].qty=++qty
        },
        decreseQty:(state,action)=>{
            const index=state.cartItem.findIndex((el)=>el._id===action.payload)
            var qty=state.cartItem[index].qty
            if(qty>1){
                state.cartItem[index].qty=--qty

            }
        }
    }
})
export const {setDataProduct,addCartItem,deleteCartItem,increaseQty,decreseQty}=ProductSlice.actions

export default ProductSlice.reducer;