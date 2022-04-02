import React from "react";
import CloseIcon from '@material-ui/icons/Close';
import styled from "styled-components";
import { useProductsContext } from '../Context/products_context';
import { links } from "../utils/Constants";
import { Link } from "react-router-dom";
import { CartButton } from "./CartButton";
import { useUserContext } from "../Context/User_context";

const SidebarWrap=styled.div`
    .sidebar{
        display:none;
    }
    .sidebar.show-sidebar{
        display:block;
    }
    @media (max-width:767px){
        aside.sidebar.show-sidebar {
            padding: 30px;
        }
        .sidebar button {
            background: transparent;
            border: 0;
            /* font-size: 26px; */
        }
        .sidebar li a {
            color: #102a42;
            font-size: 1.3rem;
            margin-bottom: 12px;
            display: block;
        }
    }
`

export const SideBar = () =>{
    const {isSidebarOpen,closeSideBar}=useProductsContext()
    const { myUser } = useUserContext()
    return(
        <SidebarWrap>
            <aside className={`${isSidebarOpen? "sidebar show-sidebar":"sidebar"}`}>
                <div className="d-flex justify-content-end">
                    <button type="button" class="" onClick={closeSideBar}>
                        <CloseIcon />
                    </button>
                </div>
                <ul>
                    {
                        links.map((val)=>{
                            return(
                                <li>
                                    <Link to={val.url}>{val.Name}</Link>
                                </li>
                            )
                        })
                    }
                    {myUser && <li>
                            <Link to="/checkout">Checkout</Link> 
                        </li>
                    }
                </ul>
                <div>
                    <CartButton />
                </div>
            </aside>
        </SidebarWrap>
    )
}