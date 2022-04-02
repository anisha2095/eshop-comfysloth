import { 
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
    GET_PRODUCTS_BEING,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_SINGLE_PRODUCT_BEGIN,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR
 } from "../actions";

 const products_reducer = (state,action) => {
     if(action.type === SIDEBAR_OPEN){
        return{ ...state,isSidebarOpen: true}
     }
     if(action.type === SIDEBAR_CLOSE){
        return{ ...state,isSidebarOpen: false}
     }
     if(action.type === GET_PRODUCTS_BEING){
        return{ ...state,products_loading:true }
     }
     if(action.type ===GET_PRODUCTS_SUCCESS){
        const featured_products=action.payload.filter((val) => val.featured === true)
        return{ ...state,
            products_loading:false,
            products:action.payload,
            featured_products
        }
     }
     if(action.type === GET_PRODUCTS_ERROR){
        return{ ...state,products_loading:false,products_error:true}
     }

     if(action.type === GET_SINGLE_PRODUCT_BEGIN){
        return{ ...state,single_products_loading:true}
     }
     if(action.type === GET_SINGLE_PRODUCT_SUCCESS){
      return{ ...state,
         single_products_loading:false,
         single_Product: action.payload
      }
     }
     if(action.type === GET_SINGLE_PRODUCT_ERROR){
         return{ ...state,single_products_loading:false,single_products_error:true}
     }
 }

 export default products_reducer