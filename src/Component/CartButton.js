import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { useCartContext } from '../Context/Cart_context';
import { useUserContext } from '../Context/User_context';
import './CartButton.css'


export const CartButton = () =>{
    const {total_items} = useCartContext()
    const {loginWithRedirect,logout,myUser} = useUserContext()
    return(
        <div className='cart-wrap'>
            <Link to="/cart">
                Cart
                <ShoppingCartIcon />
                <span>{total_items}</span>
            </Link>
             {myUser ? <button type="button" onClick={()=>logout(
                {returnTo:window.location.origin}
            )}>Logout</button>:<button type="button" onClick={loginWithRedirect}>Login<LockOpenIcon /></button>}
         </div>
    )
}


