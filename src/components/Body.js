import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    const [searchText, setSearchText] = useState("")

    useEffect(()=> {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return listOfRestaurants == 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }}></input>
                    <button onClick={() => {
                        const regexp = new RegExp(searchText, 'i');
                        filteredRestList2 = listOfRestaurants.filter(res => {
                            return regexp.test(res.info.name)
                        })
                        setFilteredRestaurants(filteredRestList2)                        
                        console.log(searchText)
                    }}>Search</button>
                </div>
                <button 
                    className="filter-btn"
                    onClick={() => {
                        filteredRestList = listOfRestaurants.filter(res => {
                            return res.info.avgRating >= 4.3
                        })
                        setListOfRestaurants(filteredRestList)
                    }}
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant.info}/>))}
            </div>
        </div>
    )
}

export default Body;