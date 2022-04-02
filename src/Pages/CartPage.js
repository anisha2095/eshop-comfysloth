import React from 'react';
import { Link } from 'react-router-dom';
import { BreadCrumb } from '../Component/BreadCrumb';
import { useCartContext } from '../Context/Cart_context';
import CartContent from '../Component/CartContent';

const CartPage = () =>{
    const { cart } = useCartContext()
    console.log("cart item",cart)
    if(cart.length < 1){
        return(
            <div>
                <h4>Your Cart is Empty</h4>
                <Link to="/products" >Fill it</Link>
            </div>
        )
        
    }
    return<div>
            <BreadCrumb title={"Cart"} />
            <CartContent />
        </div>
}

export default CartPage