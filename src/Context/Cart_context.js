import React, { useReducer,useContext, useEffect } from "react";
import reducer from '../reducers/cart_reducer';
import { ADD_TO_CART,REMOVE_CART_ITEM,CLEAR_CART,TOGGLE_CART_ITEM_AMOUNT,COUNT_CART_TOTALS } from "../actions";
 
const getLocalStorage = () => {
    let cart = localStorage.getItem('cart');
    if(cart){
        return JSON.parse(localStorage.getItem('cart'))
    }
    else{
        return []
    }
}

const initialState={
    cart: getLocalStorage(),
    total_amount: 0,
    total_items: 0,
    shipping_fee: 534,
}

const CartContext = React.createContext()

export const CartProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState)

    const addToCart = (id,color,quantity,product) =>{
        dispatch({type:ADD_TO_CART, payload:{id,color,quantity,product}})
    }

    // remove items
    const removeItem = (id) => {
        dispatch({type:REMOVE_CART_ITEM, payload:id})
    }

    // toggle Amount
    const toggleAmount = (id,value) => {
        console.log("toggleamount",id,value)
        dispatch({type:TOGGLE_CART_ITEM_AMOUNT,payload:{id,value}})
    }

    //clearCart Item
    const clearCart = () => {
        dispatch({type:CLEAR_CART})
    }

    useEffect(()=>{
        dispatch({type:COUNT_CART_TOTALS})
        localStorage.setItem('cart',JSON.stringify(state.cart))
    },[state.cart])

    return(
        <CartContext.Provider value={{...state,addToCart,removeItem,toggleAmount,clearCart}} >
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}