import React from "react"
import { formatPrice } from "../utils/helpers";
import { useCartContext } from '../Context/Cart_context';
import { useUserContext } from "../Context/User_context";
import { Link } from "react-router-dom";

const CartTotal = () =>{
    const {total_amount,shipping_fee}=useCartContext()
    const {myUser,loginWithRedirect}=useUserContext()
    return(
        <div className="d-flex justify-content-end">
            <div className="cartTotal">
                <div className="d-flex align-items-center justify-content-between">
                    <h5>Subtotal:</h5>
                    <p>{formatPrice(total_amount)}</p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <h5>Shipping fee:</h5>
                    <p>{formatPrice(shipping_fee)}</p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <h5>Total:</h5>
                    <p>{formatPrice(total_amount + shipping_fee)}</p>
                </div>
                {
                    myUser ? <Link to="/checkout"  className="dark-red-btn">Proceed to Checkout</Link>:
                    <button type="button" onClick={loginWithRedirect} className="dark-red-btn">Login</button>
                }
            </div>
        </div>
    )
}

export default CartTotal