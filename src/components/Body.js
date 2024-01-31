import RestaurantCard from "./RestaurantCard";
import restListObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [restListObj1, setRestListObj] = useState(restListObj)
    const [searchRestList, setSearchRestList] = useState(restListObj)
    return (
        <div className="body">
            <div className="search">
                <input className="text" id="text" type="text" placeholder="Search"></input>
                <button
                    className="search-btn"
                    onClick={() => {
                        const searchStr = document.getElementById('text').value;
                        const regexp = new RegExp(searchStr, 'i');
                        filteredRestList1 = searchRestList.filter(res => {
                            return regexp.test(res.info.name)
                        })
                        setSearchRestList(filteredRestList1)
                    }}
                >Search</button>
            </div>
            <div className="filter">
                <button 
                    className="filter-btn"
                    onClick={() => {
                        filteredRestList = restListObj1.filter(res => {
                            return res.info.avgRating >= 4.3
                        })
                        setRestListObj(filteredRestList)
                    }}
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {restListObj1.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant.info}/>))}
                {/* {searchRestList.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant.info}/>))} */}
            </div>
        </div>
    )
}

export default Body;