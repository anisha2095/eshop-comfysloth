import React from "react";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { useProductsContext } from '../Context/products_context';
import { Product } from "./Product";
import { Link } from "react-router-dom";
import './FeatureProduct.css'

export const FeatureProduct = () => {
    const {
        products_loading:loading,
        products_error:error,
        featured_products:feature
    } = useProductsContext()

    if(loading){
        document.body.style.overflow="hidden"
        return <Loading />
    }else{
        document.body.style.overflow="auto"
    }
    if(error){
        return <Error />
    }

    return(
        <div className="featured-product">
            <div className="container">
                <h2>Featured Products</h2>
                <div className="row">
                    {
                        feature.map((val)=>
                            <Product {...val} />
                        )
                    }
                </div>
                <Link to="/products" className="brown-btn" >All Products</Link>
            </div>
        </div>
    )
}