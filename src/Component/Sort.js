import { useFilterContext } from "../Context/Filter_context"
import React from "react"
import { IoMdReorder,IoMdApps } from "react-icons/io";
// import AppsIcon from '@mui/icons-material/Apps';
// import ReorderIcon from '@mui/icons-material/Reorder';
import './Sort.css'

const Sort = () => {
    const{filter_product:products,grid_view,setGridView,setListView,updateSort,sort}=useFilterContext()
    return(
        <div className="sort_field">
            <button type="button" className={grid_view?"active":null} onClick={setGridView}>
                <IoMdApps />
            </button>
            <button type="button" className={!grid_view?"active":null} onClick={setListView}>
                <IoMdReorder />
            </button>
            <p>{products.length} Products Found</p>
            <hr />
            <select name="sort" value={sort} onChange={updateSort}>
                <option value="price-lowest">Price (Lowest)</option>
                <option value="price-highest">Price (Highest)</option>
                <option value="name-a">name (a-z)</option>
                <option value="name-z">name (z-a)</option>
            </select>
        </div>
    )
}
export default Sort