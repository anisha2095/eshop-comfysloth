import { formatPrice } from "../utils/helpers";
import { useHistory } from "react-router";

const ListView = ({product}) => {
    const history = useHistory()

    return(
        <>
            <div className="listView">
            {
               product.map((val) => {
                   return(
                    <div className="listProduct">
                        <div className="row" onClick={() => {
                            history.push(`/single-product/${val.id}`)
                        }}>
                            <div className="col-md-4">
                                <img src={val.image} alt={val.name} />
                            </div>
                            <div className="col-md-8">
                                <h5>{val.name}</h5>
                                <span>{formatPrice(val.price)}</span>
                                <p>
                                    {val.description}
                                </p>
                            </div>    
                        </div>
                    </div>
                   )
               })
            }
            </div>
        </>
    )
}

export default ListView