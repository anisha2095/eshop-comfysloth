import React from "react"
import { useFilterContext } from "../Context/Filter_context"
import { formatPrice,getUniqueValues } from "../utils/helpers"
import './Filter.css'

const Filter = () => {
    const {
        filters: {
            text,
            category,
            company,
            color,
            min_price,
            max_price,
            price,
            shipping,
        },
        updateFilters,
        clearFilters,
        all_product
    } = useFilterContext()

    const categories = getUniqueValues(all_product,"category")
    const companies = getUniqueValues(all_product,"company")
    const colors = getUniqueValues(all_product,"colors")
    console.log(categories)
    console.log(companies)
    console.log(colors)
    return(
        <div className="">
            <form onSubmit={(e) => {
                e.preventDefault()
            }}>
                {/* search input */}
                <div className="filter-field">
                    <input 
                        type="text" 
                        name="text" 
                        placeholder="search" 
                        onChange={updateFilters}
                        value={text}
                        className="search-input"
                    />
                    <div className="caltegory filter_title">
                        <h5>Category</h5>
                            {
                                categories.map((val,index)=> {
                                    return <button key={index}
                                        onClick={updateFilters}
                                        type="button"
                                        name="category"
                                        className={`${
                                            category === val ? 'active' : null
                                        }`}
                                    >{val}</button>
                                })
                            }
                    </div>
                    <div className="companies filter_title">
                        <h5>companies</h5>
                        <select
                            onChange={updateFilters}
                            name="company"
                            value={company}>
                            {
                                companies.map((val,index)=> {
                                    return (
                                        <option key={index}
                                            className={`${
                                                company === val ? 'active' : null
                                            }`}
                                        >{val}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="colors filter_title">
                        <h5>colors</h5>
                            {
                                colors.map((val,index)=> {
                                    if(val === "all"){
                                        return (
                                            <button key={index}
                                                onClick={updateFilters}
                                                type="button"
                                                name="color"
                                                className={`${color === val ? 'allcolor active' : "allcolor"}`}
                                                // data-color={val}
                                                value={val}
                                                style={{background:val}}
                                            >all</button>
                                        )
                                    }else{
                                        return (
                                            <button key={index}
                                                onClick={updateFilters}
                                                type="button"
                                                name="color"
                                                className={`${color === val ? 'color active' : "color"}`}
                                                // data-color={val}
                                                value={val}
                                                style={{background:val}}
                                            >{val.color}</button>
                                        )
                                    }
                                })
                            }
                    </div>
                    <div className="price filter_title">
                        <h5>Price</h5>
                        <p>{formatPrice(price)}</p>
                        <input 
                            type="range" 
                            min={min_price} 
                            max={max_price} 
                            value={price} 
                            onChange={updateFilters}
                            name="price"
                        />
                    </div>
                    <div className="shipping">
                        <label htmlFor="shipping">Free Shipping</label>
                        <input type="checkbox" 
                            onChange={updateFilters}
                            name="shipping"
                            id="shipping"
                            checked={shipping}
                        />
                    </div>
                </div>
                <button type="button" onClick={clearFilters} className="dark-red-btn">Clear Filter</button>
            </form>
        </div>
    )
}
export default Filter