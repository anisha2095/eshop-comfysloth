import React, { useContext, useEffect, useReducer } from "react"
import {LOAD_PRODUCT,SET_GRIDVIEW,SET_LISTVIEW,UPDATE_SORT,SORT_PRODUCTS,UPDATE_FILTERS,FILTER_PRODUCT,CLEAR_FILTER} from "../actions";
import {useProductsContext} from "../Context/products_context"
import reducer from '../reducers/Filter_reducer'

const initialState={
    filter_product:[],
    all_product:[],
    grid_view:true,
    sort:"price-lowest",
    filters: {
        text: '',
        company: "all",
        category: "all",
        color: "all",
        min_price: 0,
        max_price: 0,
        price: 0,
        shipping: false,
    },
}

const FilterContext = React.createContext()

export const FilterProvider=({children})=>{
    const {products} = useProductsContext()
    const [state,dispatch] = useReducer(reducer,initialState)

    useEffect(()=>{
        dispatch({type: LOAD_PRODUCT,payload:products})
    },[products])

    useEffect(()=>{
        dispatch({type: FILTER_PRODUCT})
        dispatch({type: SORT_PRODUCTS})
    },[products,state.sort,state.filters])

    const setGridView = () => {
        dispatch({type: SET_GRIDVIEW})
    }
    const setListView = () => {
        dispatch({type: SET_LISTVIEW})
    }

    const updateSort = (e) => {
        const value=e.target.value
        console.log(value)
        dispatch({type: UPDATE_SORT, payload: value})
    }

    const updateFilters = (e) => {
        let name = e.target.name
        let value = e.target.value
        if(name === "category"){
            value=e.target.textContent
            console.log(e.target.textContent)
        }
        // if(name === "color"){
        //     value=e.target.dataset.color
        // }
        if(name === "price"){
            value=Number(value)
        }
        if(name === "shipping"){
            value=e.target.checked
        }
        // console.log(value)
        console.log(name,value)
        dispatch({type: UPDATE_FILTERS, payload: {name,value}})
    }

    const clearFilters = () => {
        dispatch({type: CLEAR_FILTER})
    }

    return(
        <FilterContext.Provider
        value={{...state,setGridView,setListView,updateSort,updateFilters,clearFilters}}
        >
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () =>{
    return useContext(FilterContext)
}