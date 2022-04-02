import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { product_url as url } from "../utils/Constants";
import axios from "axios";
import { 
    SIDEBAR_CLOSE,
    SIDEBAR_OPEN,
    GET_PRODUCTS_BEING,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_SINGLE_PRODUCT_BEGIN,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR
 } from "../actions";

 const initialState = {
    isSidebarOpen: false,
    products_loading: false,
    products_error: false,
    products:[],
    featured_products:[],
    single_products_loading: false,
    single_products_error: false,
    single_Product:{}
 }

 const ProductsContext = React.createContext()

 export const ProductsProvider = ({children}) => {
     const [state,dispatch] = useReducer(reducer,initialState)

     const openSideBar = () =>{
         dispatch({type: SIDEBAR_OPEN})
     }
     const closeSideBar = () =>{
        dispatch({type: SIDEBAR_CLOSE})
    }
    const fetchProduct = async(url) =>{
        dispatch({ type: GET_PRODUCTS_BEING })

       try {
            const response= await axios.get(url)
            const products = response.data
            dispatch({type:GET_PRODUCTS_SUCCESS, payload:products})
       } catch (error) {
           dispatch({type:GET_PRODUCTS_ERROR})
       }
    }
    const fetchsingleProduct= async(url) =>{
        dispatch({type: GET_SINGLE_PRODUCT_BEGIN})
        try {
            const response=await axios.get(url)
            const single_Product=response.data
            dispatch({type: GET_SINGLE_PRODUCT_SUCCESS,payload: single_Product})
        } catch (error) {
            dispatch({type: GET_SINGLE_PRODUCT_ERROR})
        }
    }
    useEffect(()=>{
        fetchProduct(url)
    },[])

    return(
        <ProductsContext.Provider
        value={{ ...state,openSideBar,closeSideBar,fetchsingleProduct }}>
            {children}
        </ProductsContext.Provider>
    )
 }

 export const useProductsContext = () =>{
     return useContext(ProductsContext)
 }