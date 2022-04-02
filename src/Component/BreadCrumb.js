import React from "react";
import {Link} from 'react-router-dom'
import './BreadCrumb.css'


export const BreadCrumb = (props) =>{
    console.log(props)
    return(
        <div className="breadcrumb-field">
            <div className="container">
                <Link to="/">Home /</Link>
                {props.products && <Link to="/products">Product /</Link>}
                <span>{props.title}</span>
            </div>
        </div>
    )
}