import React from "react"
import './Star.css'

const Stars = ({stars,reviews}) => {
    console.log(stars,reviews)
   
    return(
        <div className="d-flex">
            <div class="star-img">
                {/* start */}
                <span>{stars >= 1 ? (<img src="../images/star.png" width="20px" alt="star" />): 
                stars >= 0.5 ? (<img src="../images/rating.png" width="20px" alt="star" />) : 
                (<img src="../images/blankstar.png" width="20px" alt="star" />) }</span>
                {/* end */}
                {/* start */}
                <span>{stars >= 2 ? (<img src="../images/star.png" width="20px" alt="star" />): 
                stars >= 1.5 ? (<img src="../images/rating.png" width="20px" alt="star" />) : 
                (<img src="../images/blankstar.png" width="20px" alt="star" />) }</span>
                {/* end */}
                {/* start */}
                <span>{stars >= 3 ? (<img src="../images/star.png" width="20px" alt="star" />): 
                stars >= 2.5 ? (<img src="../images/rating.png" width="20px" alt="star" />) : 
                (<img src="../images/blankstar.png" width="20px" alt="star" />) }</span>
                {/* end */}
                {/* start */}
                <span>{stars >= 4 ? (<img src="../images/star.png" width="20px" alt="star" />): 
                stars >= 3.5 ? (<img src="../images/rating.png" width="20px" alt="star" />) : 
                (<img src="../images/blankstar.png" width="20px" alt="star" />) }</span>
                {/* end */}
                {/* start */}
                <span>{stars === 5 ? (<img src="../images/star.png" width="20px" alt="star" />): 
                stars >= 4.5 ? (<img src="../images/rating.png" width="20px" alt="star" />) : 
                (<img src="../images/blankstar.png" width="20px" alt="star" />) }</span>
                {/* end */}
            </div>
            <div style={{color:"#324d67"}}>( {reviews} customers review )</div>
        </div>
    )
}

export default Stars