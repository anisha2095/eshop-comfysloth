import React from 'react';
import { BreadCrumb } from '../Component/BreadCrumb';
import './CheckoutPage.css'

const CheckoutPage = () =>{
    return(
        <div>
            <BreadCrumb title={"Checkout"} />
            <div className='checkoutPage'>
                <h5>Service Unavailable</h5>
            </div>
        </div>
    )
}

export default CheckoutPage;