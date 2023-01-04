import { useState } from "react";
import CartContext from "./CartContext";
const CartProvider=(props)=>{
    const [items,updateItems]=useState([])
    const addItemToCartHandler=item=>{
               updateItems(...items,item);
               console.log(" inside in addItemCart", cartContext)
    }
    const removeItemFromCartHandler=id=>{

    }
    const cartContext={
        items:[],
        totalAmount:0,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler,
        message:"i am context"
    }

         return<CartContext.Provider value={cartContext}>
            {props.children}
         </CartContext.Provider>
}
export default CartProvider;