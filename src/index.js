import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {ProductsProvider} from './Context/products_context'
import {FilterProvider} from './Context/Filter_context'
import {CartProvider} from './Context/Cart_context'
import { Auth0Provider } from '@auth0/auth0-react'
import { UserProvider } from './Context/User_context'

ReactDOM.render(
    <Auth0Provider
      domain="dev-poztrmb7.us.auth0.com"
      clientId="ttXFSkTS2SmzgVzfNW9HayGFRITl8Oa6"
      redirectUrl={window.location.origin}
      cacheLocation='localstorage'
    >
      <UserProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </UserProvider>
    </Auth0Provider>,
  document.getElementById('root')
);
