import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import {
  HomePage,
  AboutPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
  PrivateRoute,
  ProductsPage,
  SingleProductPage,
  AuthWrapper
} from './Pages/index'
import Navbar from './Component/Navbar';
import { Footer } from './Component/Footer';
import { SideBar } from './Component/SideBar';
import { AddtoCart } from './Component/AddtoCart';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Navbar />
            <SideBar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/cart" component={CartPage} />
              <PrivateRoute exact path="/checkout">
                <CheckoutPage />
              </PrivateRoute>
              <Route exact path="/products" component={ProductsPage} />
              <Route exact path="/addToCart/:id" component={AddtoCart} />
              <Route exact path="/single-product/:id" component={SingleProductPage} />
              <Route exact path="*" component={ErrorPage} />
            </Switch>
            <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
