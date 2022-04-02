import React from 'react'
import {useFilterContext} from '../Context/Filter_context'
import GridView from './GridView'
import ListView from './ListView'
import './ProductList.css'

const ProductList = () => {
    const {filter_product:product,grid_view}=useFilterContext()
    console.log("productlist",product)
    console.log(product.length)
    if(product.length < 1) {
        return <h5>Sorry product is not Available</h5>
    }
    if(grid_view === false){
        return <ListView product={product} />
    }
    return(
        <div className='gridView'>
            <GridView product={product} />
        </div>
    )
}
export default ProductList