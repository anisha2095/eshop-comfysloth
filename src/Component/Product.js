import React from "react";
import { useHistory } from "react-router";
import { formatPrice } from "../utils/helpers";
import './Product.css'

export const Product= ({image,name,price,id}) =>{
    const history = useHistory()
    function productDetail(){
        history.push(`/single-product/${id}`)
    }
    return(
        <div className="col-md-6 col-lg-4" onClick={productDetail}>
            <img src={image} width="300px" height="300px" alt={name} />
            <div className="d-lg-flex d-md-block justify-content-between">
                <p>{name}</p>
                <p>{formatPrice(price)}</p>
            </div>
        </div>
    )
}