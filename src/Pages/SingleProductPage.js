import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { BreadCrumb } from '../Component/BreadCrumb';
import { Loading } from '../Component/Loading';
import { useProductsContext } from '../Context/products_context';
import { Error } from '../Component/Error';
import { single_product_url as url } from '../utils/Constants';
import { formatPrice } from '../utils/helpers';
import { AddtoCart } from '../Component/AddtoCart';
import ProductImage from '../Component/ProductImage';
import Stars from '../Component/Stars';
import { useHistory } from 'react-router-dom';
import './SingleProductPage.css'

const SingleProductPage = () =>{
    const {id}=useParams();
    const history = useHistory()
    console.log(id)
    const {
        single_products_loading:loading,
        single_products_error:error,
        single_Product:single_Product,
        fetchsingleProduct
    } = useProductsContext()

    useEffect(()=>{
        fetchsingleProduct(`${url}${id}`)
    },[id])

    if(loading){
        return <Loading />
    }
    if(error){
        return <Error />
    }

    return(
        <div>
            <BreadCrumb title={single_Product.name}  products />
            <div className='container'>
                <div className='back-btn'>
                    <button 
                        onClick={()=> {
                            history.goBack()
                        }} 
                        className='brown-btn mt-4 mb-4'
                    >Back to Product Page</button>
                </div>
                <div className='row'>
                    <div className='col-md-12 col-lg-6'>
                        <ProductImage image={single_Product.images} />
                    </div>
                    <div className='col-md-12 col-lg-6 product_info'>
                        <h3>{single_Product.name}</h3>
                        <Stars stars={single_Product.stars} reviews={single_Product.reviews} />
                        <p style={{color:"#ab7a5f",marginBottom:"0"}}>{formatPrice(single_Product.price)}</p>
                        <p style={{fontSize: "1rem",lineHeight: "1.6"}}>{single_Product.description}</p>
                        <div className='d-flex'>
                            <h5>Available : </h5> 
                            <span>{single_Product.stock > 0 ? "In Stock" : "Out of Stock"}</span>
                        </div>
                        <div className='d-flex'>
                            <h5>sku : </h5> 
                            <span>{single_Product.id}</span>
                        </div>
                        <div className='d-flex'>
                            <h5>Brand : </h5>
                            <span>{single_Product.company}</span>
                        </div>
                        <div>{single_Product.stock > 0 && <AddtoCart product={single_Product} />} </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProductPage