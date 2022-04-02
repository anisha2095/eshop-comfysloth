import { Product } from "./Product"

const GridView = ({product}) => {
    console.log("gridview",product)
    return(
        <div className="row">
            {
                product.map((val)=> {
                    return <Product {...val} />
                })
            }
        </div>
    )
}

export default GridView