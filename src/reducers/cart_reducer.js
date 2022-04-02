import { ADD_TO_CART,REMOVE_CART_ITEM,CLEAR_CART,TOGGLE_CART_ITEM_AMOUNT,COUNT_CART_TOTALS } from "../actions";

const cart_reducer = (state,action) => {
    if(action.type === ADD_TO_CART){
        const {id,color,quantity,product} = action.payload
        const tempItem = state.cart.find((i) => 
            i.id === id + color
        )
        if(tempItem){
            const tempCart = state.cart.map((cartItems) => {
                if(cartItems.id === id + color){
                    let newQuantity = cartItems.quantity + quantity

                    if(newQuantity > cartItems.max){
                        newQuantity = cartItems.max
                    }
                    return {...cartItems,quantity: newQuantity }
                }
                else{
                    return cartItems
                }
            })
            return {...state,cart: tempCart}
        }
        else{
            const newItem = {
                id: id + color,
                name: product.name,
                color,
                quantity,
                image: product.images[0].url,
                price: product.price,
                max: product.stock
            }
            return {...state, cart: [...state.cart,newItem]}
        }
    }
    if(action.type === REMOVE_CART_ITEM){
        const {cart} = state
        const tempCart=cart.filter((item)=>item.id !== action.payload)
        return {...state,cart:tempCart}
    }
    if(action.type === CLEAR_CART){
        return {...state,cart:[]}
    }
    if(action.type === TOGGLE_CART_ITEM_AMOUNT){  
        const {id,value} = action.payload
        const tempCart=state.cart.map((item)=>{
            if(item.id === id){
                if(value === 'inc'){
                    let newQuantity=item.quantity + 1
                    if(newQuantity > item.stock){
                        newQuantity = item.stock
                    }
                    return {...item,quantity:newQuantity }
                }
                if(value === 'dec'){
                    let newQuantity=item.quantity - 1
                    if(newQuantity < 1){
                        newQuantity = 1
                    }
                    return {...item,quantity:newQuantity }
                }
            }else{
                return item
            }
        })
        return {...state,cart:tempCart}
    }
    if(action.type === COUNT_CART_TOTALS){
        const {total_items,total_amount} = state.cart.reduce(
            (total,cartItem) => {
                const {quantity,price} = cartItem

                total.total_items += quantity
                total.total_amount += price * quantity
                return total
            },
            {
                total_amount:0,
                total_items:0
            }
        )
        return {...state,total_items,total_amount}
    }
}

export default cart_reducer