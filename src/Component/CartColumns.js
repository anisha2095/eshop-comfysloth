import React from "react"
import './CartColumns.css'

const CartColumns = () =>{
    return(
        <>
            <div className="table" >
                <p>Item</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
            </div>
            <hr />
        </>
    )
}

export default CartColumns