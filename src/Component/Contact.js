import React from "react";
import './Contact.css'

export const Contact = () => {
    return(
        <div className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h2>Join our newsletter and get 20% off</h2>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?
                        </p>
                    </div>
                    <div className="col-md-5 d-flex flex-column justify-content-center">
                        <form
                            action="https://formspree.io/f/xoqyreok"
                            method="POST"
                            >
                            <label>
                                <input type="email" name="_replyto" placeholder="Enter Email" />
                            </label>
                            <button type="submit" className="brown-btn">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}