import React from "react";
import styled from "styled-components";

const FooterWrap=styled.div`
    background: #000;
    color: #fff;
    padding: 30px;
    position: sticky;
    bottom: 0;
    width: 100%;
    text-align:center;
`

export const Footer = () =>{
    return(
        <FooterWrap>
            © 2021 ComfySloth All rights reserved
        </FooterWrap>
    )
}