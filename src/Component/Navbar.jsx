import React from 'react'
import { CartButton } from './CartButton';
import { links } from '../utils/Constants';
import DehazeIcon from '@material-ui/icons/Dehaze';
import styled from 'styled-components';
import { useProductsContext } from '../Context/products_context';
import { useUserContext } from '../Context/User_context';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'

const NavBar=styled.div`
    .navbar-header{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
    button.navbar-toggle {
        display: none;
    }
    .nav-links ul {
        display: flex;
        margin-bottom: 0;
    }
    .nav-links ul li {
        list-style: none;
        margin: 0 10px;
    }
    .navbar-header .nav-links ul li a {
        color: #324d67;
        text-transform: capitalize;
        font-size: 1rem;
        padding: 10px 13px;
        transition: 0.3s;
        border-bottom: 2px solid #fff;
    }
    .navbar-header .nav-links ul li a:hover {
        border-bottom: 2px solid #decbc0;
        text-decoration: none;
        transition: 0.3s;
    }
    .navbar-header img {
        width: 175px;
    }
    .cart-wrap a:hover {
        color: #795744;
        text-decoration: none;
    }

    @media screen and (max-width: 767px){
        .nav-links ul{
            display:none;
        }
        .cart-wrap{
            display:none;
        }
        button.navbar-toggle{
            display:flex;
        }
        button.navbar-toggle {
            position: relative;
            right: -26%;
            background: transparent;
            border: 0;
        }
    }
    @media (min-width: 768px) and (max-width: 991px){
        .nav-links ul li {
            margin: 0;
        }
    }
`

const Navbar = () => {
    const {openSideBar}=useProductsContext()
    const {myUser}=useUserContext()
    return(
        <NavBar>
            <div className='container'>
                <div className="navbar-header">
                    <div>
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <button className="navbar-toggle" type="button" onClick={openSideBar}>
                        <DehazeIcon />
                    </button>

                    <div className="nav-links">
                        <ul className="">
                            {
                                links.map((link)=>{
                                    console.log(link)
                                    return(
                                        <li>
                                            <Link to={link.url}>{link.Name}</Link>
                                        </li>
                                    )
                                })
                            }
                            {myUser && <li>
                                    <Link to="/checkout">Checkout</Link> 
                                </li>
                            }
                        </ul>
                    </div>
                    <div>
                        <CartButton />
                    </div>
                </div>
            </div>
        </NavBar>
    )
}

export default Navbar 