import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    const [searchText, setSearchText] = useState("")

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

    const onlineStatus = useOnlineStatus()
    if (onlineStatus == false) {
        return (
            <h1>Looks like you are Offline!! Please check your Internet connection.</h1>
        )
    }

    const {isLoggedInUser, setUserName} = useContext(UserContext)

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
            <div className="filter flex">
                <div className="m-4 p-4">
                    <input type="text" data-testid="searchInput"  className="border border-solid border-black" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }}></input>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg hover:bg-pink-100"onClick={() => {
                        const regexp = new RegExp(searchText, 'i');
                        filteredRestList2 = listOfRestaurants.filter(res => {
                            return regexp.test(res.info.name)
                        })
                        setFilteredRestaurants(filteredRestList2)                        
                        console.log(searchText)
                    }}>Search</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <button 
                        className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-pink-100"
                        onClick={() => {
                            filteredRestList = listOfRestaurants.filter(res => {
                                return res.info.avgRating >= 4.3
                            })
                            setListOfRestaurants(filteredRestList)
                        }}
                    >Top Rated Restaurants</button>                    
                </div>
                <div className="m-4 p-4 flex items-center">
                    <label>User Name : </label>
                    <input className="m-4 border border-solid border-black" value={isLoggedInUser} onChange={(e)=> setUserName(e.target.value)}/>
                </div>

            </div>
            <div className="flex flex-wrap">
                {filteredRestaurants.map((restaurant) => (<Link key={restaurant.info.id}  to={"/restaurants/"+restaurant.info.id}>
                    {restaurant.info.aggregatedDiscountInfoV3 ? <RestaurantCardPromoted resData={restaurant.info}/> : <RestaurantCard resData={restaurant.info}/>}
                    </Link>))}
            </div>
        </div>
    )
}

export default Body;