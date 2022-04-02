import React from 'react';
import { Hero } from '../Component/Hero';
import { FeatureProduct } from '../Component/FeatureProduct';
import { Service } from '../Component/Service';
import { Contact } from '../Component/Contact';

const HomePage = () =>{
    return(
        <div>
            <Hero />
            <FeatureProduct />
            {/* <Service /> */}
            <Contact />
        </div>
    )
}

export default HomePage