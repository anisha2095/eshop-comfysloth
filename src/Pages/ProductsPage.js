import React from 'react';
import { BreadCrumb } from '../Component/BreadCrumb';
import Filter from '../Component/Filter';
import ProductList from '../Component/ProductList';
import Sort from '../Component/Sort';

const ProductsPage = () =>{
    
    return(
        <>
            <BreadCrumb title={"Product"} />
            <div className='container'>
                <div className='productPage'>
                    <div className="row">
                        <div class="col-md-3">
                            <Filter />
                        </div>
                        <div className="col-md-9">
                            <Sort />
                            <ProductList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsPage