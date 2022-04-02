import React from "react"
import { formatPrice } from "../utils/helpers"
import ProductQuantity from "./ProductQuantity"
import { useCartContext } from "../Context/Cart_context"
import DeleteIcon from '@material-ui/icons/Delete';

const CartItem = (props) =>{
    const {id,color,image,name,quantity,price}=props
    const {removeItem,toggleAmount} = useCartContext()
    const increment=()=>{
        toggleAmount(id,'inc')
    }
    const decrement=()=>{
        toggleAmount(id,'dec')
    }
    console.log("reach",props)
    return(
        <div className="cartItem">
            {props?.id && <div className="row border-bottom" >
                <div className="col-md-2 pt-3 pb-3 d-flex align-items-center">
                    <img src={image} alt={name} style={{width:"100%",height:"100%"}} />
                </div>
                <div className="col-md-3 pt-3 pb-3 d-flex align-items-center">
                    <div>
                        <h5>{name}</h5>
                        <p>Color: <span style={{background:color}} className="color-block"></span></p>
                    </div>
                </div>
                <div className="col-md-3 pt-3 pb-3 d-flex align-items-center">
                    <ProductQuantity increment={increment} decrement={decrement} quantity={quantity} />
                </div>
                <div className="col-md-2 pt-3 pb-3 d-flex align-items-center">
                    <p>{formatPrice(price * quantity) }</p>
                </div>
                <div className="col-md-2 pt-3 pb-3 d-flex align-items-center">
                    <button type="button" onClick={()=>{removeItem(id)}}><DeleteIcon /></button>
                </div>
            </div>}
        </div>
    )
}

export default CartItem