import {LOAD_PRODUCT,SET_GRIDVIEW,SET_LISTVIEW,UPDATE_SORT,SORT_PRODUCTS,UPDATE_FILTERS,FILTER_PRODUCT,CLEAR_FILTER} from "../actions";

const filter_reducer = (state,action) => {
    if(action.type === LOAD_PRODUCT){
        let maxPrice = action.payload.map((p) =>  p.price)
        maxPrice = Math.max(...maxPrice)
        console.log(maxPrice)
        return{
            ...state,
            all_product: [...action.payload],
            filter_product: [...action.payload],
            filters: {...state.filters,max_price:maxPrice,price:maxPrice}
        }
    }
    if(action.type === SET_GRIDVIEW){
        return{...state,grid_view:true}
    }
    if(action.type === SET_LISTVIEW){
        return{...state,grid_view:false}
    }
    if(action.type === UPDATE_SORT){
        return{...state,sort:action.payload}
    }
    if(action.type === SORT_PRODUCTS){
        const {sort,filter_product} = state
        let tempProducts= [...filter_product]
        if(sort === "price-lowest"){
            tempProducts = tempProducts.sort((a,b)=>a.price - b.price)
        }
        if(sort === "price-highest"){
            tempProducts = tempProducts.sort((a,b)=>b.price - a.price)
        }
        if(sort === "name-a"){
            tempProducts = tempProducts.sort((a,b)=>{return a.name.localeCompare(b.name)})
        }
        if(sort === "name-z"){
            tempProducts = tempProducts.sort((a,b)=>{return b.name.localeCompare(a.name)})
        }
        return{...state,filter_product:tempProducts}
    }
    if(action.type === UPDATE_FILTERS){
        const {name,value} = action.payload
        console.log({...state.filters,[name]:value})
        return {...state,filters: {...state.filters,[name]:value}}
    }
    if(action.type === FILTER_PRODUCT){
        // console.log("filtering product")
        const {all_product} = state
        const {text,company,category,color,price,shipping}=state.filters
        let tempProducts=[...all_product]

        // search text
        if(text){
            tempProducts=tempProducts.filter((product) => {
                return product.name.toLowerCase().startsWith(text)
            })
        }
        // category
        if(category !== 'all'){
            tempProducts=tempProducts.filter((product) => 
                product.category === category
            )
        }
        // company
        if(company !== 'all'){
            tempProducts=tempProducts.filter((product) => 
                product.company === company
            )
        }
        // color
        if(color !== 'all'){
            tempProducts=tempProducts.filter((product) => {
                return product.colors.find((c) => c === color) 
            })
        }
        // price
        tempProducts=tempProducts.filter((product) => product.price <= price)
        // shipping
        if(shipping){
            tempProducts=tempProducts.filter((product) => product.shipping === true)
        }
        return{...state,filter_product:tempProducts }
    }
    if(action.type === CLEAR_FILTER){
        return {
            ...state,
            filters: {
                ...state.filters,
                text: '',
                company: "all",
                category: "all",
                color: "all",
                price: state.filters.max_price,
                shipping: false,
            }
        }
    }
}

export default filter_reducer