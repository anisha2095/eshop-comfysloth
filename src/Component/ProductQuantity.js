
const ProductQuantity = ({increment,decrement,quantity}) => {
    
    return(
        <div className="quantity-btn">
            <button onClick={increment}>+</button>
            <span>{quantity}</span>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default ProductQuantity