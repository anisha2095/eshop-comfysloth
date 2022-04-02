import React from "react";
import bg1 from '../assets/hero-bcg.jpeg'
import bg2 from '../assets/hero-bcg-2.jpeg'
import './Hero.css'
import { Link } from "react-router-dom";


export const Hero = () => {
    return(
        <div className='container'>
            <div className="row mt-3 mb-2">
                <div className="col-md-12 col-lg-6 d-flex justify-content-center flex-column order2">
                    <h1 className="mb-4">
                        Design Your <br />
                        Comfort Zone
                    </h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?
                    </p>
                    <Link to="/products" className="brown-btn">SHOP NOW</Link>
                </div>
                <div className="col-md-12 col-lg-6 order1">
                    <div className="hero-img">
                        <div className="bg1">
                            <img src={bg1} alt="bg1" />
                        </div>
                        <img src={bg2} alt="bg2" />
                    </div>
                </div>
            </div>
        </div>
    )
}