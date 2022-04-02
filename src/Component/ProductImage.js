import { useState } from "react"
import './ProductImage.css'

const ProductImage = ({image = [{url: ''}]}) => {
    console.log(image)
    const [mainImage,setMainImage]=useState(image[0])
    console.log(mainImage)
    return(
        <div className="mainImage">
            <img src={mainImage.url} alt="Colorimage" />
            <div className="smallImg">
                {
                    image.map((val,index) => {
                            return (
                                <div>
                                    <img src={val.url} 
                                    onClick={() => 
                                    setMainImage(image[index])} 
                                    key={index} 
                                    className={(val.url === mainImage.url) ? "active" : ""}
                                    alt={val.name}
                                    />
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

export default ProductImage