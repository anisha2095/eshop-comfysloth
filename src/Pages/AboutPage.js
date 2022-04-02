import React from 'react';
import {BreadCrumb} from '../Component/BreadCrumb'
import bg1 from '../assets/hero-bcg.jpeg'
import './AboutPage.css'

const AboutPage = () =>{
    return(
        <div>
            <BreadCrumb title={"About"} />
            <div className='aboutPage'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={bg1} alt="image" />
                        </div>
                        <div className='col-md-6'>
                            <h2>Our Story</h2>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage