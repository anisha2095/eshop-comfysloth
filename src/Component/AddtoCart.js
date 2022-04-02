import React, { useState } from "react";
import ProductQuantity from "./ProductQuantity";
import { useCartContext } from "../Context/Cart_context";
import { Link } from "react-router-dom";

export const AddtoCart = ({product}) =>{
    const { addToCart } = useCartContext()
    const{id,stock,colors}=product
    const [mainColor,setMainColor]=useState(colors[0])
    const [quantity,setQuantity] = useState(1)

    const increment = () =>{
        setQuantity((oldAmount)=>{
            console.log(oldAmount)
            let tempAmount=oldAmount+1
            if(tempAmount>stock){
                tempAmount=stock
            }
            return tempAmount
        })
    }
    const decrement = () =>{
        setQuantity((oldAmount)=>{
            let tempAmount=oldAmount-1
            if(tempAmount<1){
                tempAmount=1
            }
            return tempAmount
        })
    }
    return(
        <div>
            <div className="d-flex mb-3 align-items-center">
                <h5 className="mb-0">Colors</h5>
                {
                    colors.map((val,index)=>{
                        return <button 
                            style={{background:val,width:"16px",height:"16px",borderRadius:"50%",display:"inline"}}
                            onClick = {() => {
                                setMainColor(colors[index])
                            }}  
                            className={(val === mainColor) ? "productInfo_color active" : "productInfo_color"}
                            >  
                        </button>
                    })
                }
            </div>
            <ProductQuantity increment={increment} decrement={decrement} quantity={quantity} />
            <Link to="/cart"  onClick={()=>addToCart(id,mainColor,quantity,product)} className="brown-btn mt-4">Add to Cart</Link>
        </div>
    )
}