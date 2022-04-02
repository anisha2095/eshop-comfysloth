import React from "react"
import CartColumns from "./CartColumns"
import CartItem from "./CartItem"
import { useCartContext } from "../Context/Cart_context"
import { Link } from "react-router-dom"
import CartTotal from "./CartTotal"
import './CartContent.css'

const CartContent = () => {
    const {cart,clearCart} = useCartContext()
    console.log("anisha",cart)
    return(
        <div className="container">
            {/* <CartColumns /> */}
            {
                cart.map((item)=>{
                    return <CartItem {...item} />
                })
            }
            {/* <CartItem /> */}
            <div className="d-flex justify-content-between mt-4 mb-4">
                <Link to="/products" className="brown-btn continue-shopping">Continue Shopping</Link>
                <button type="button" onClick={clearCart} className="dark-red-btn">Clear Shopping Cart</button>
            </div>
            <CartTotal />
        </div>
    )
}

export default CartContent