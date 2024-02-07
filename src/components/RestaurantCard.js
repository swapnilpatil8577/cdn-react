import { useContext } from "react"
import { CDN_URL } from "../utils/constants"
import UserContext from "../utils/UserContext"

const RestaurantCard = (props) => {
    const {resData} = props
    const {name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla} = resData
    const {slaString} = sla
    const {isLoggedInUser} = useContext(UserContext)

    return (
        <div className="m-4 p-4 w-[250px] h-[460px] rounded-lg bg-gray-100 hover:bg-pink-100">
            <img className="rounded-lg h-52 w-60" alt="res-logo" src={CDN_URL+cloudinaryImageId}></img>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4 className="truncate">{cuisines.join(",")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{slaString}</h4>
            <h4 className="font-bold">User: {isLoggedInUser}</h4>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        const { aggregatedDiscountInfoV3 } = props.resData
        return (
            <div>
                <label className="absolute bg-red-300 text-white font-bold m-2 p-2 rounded-lg">{ aggregatedDiscountInfoV3 ? (aggregatedDiscountInfoV3.discountTag ? aggregatedDiscountInfoV3.discountTag : '') + ( aggregatedDiscountInfoV3.header ? aggregatedDiscountInfoV3.header : '') + (aggregatedDiscountInfoV3.subHeader ? aggregatedDiscountInfoV3.subHeader : '')  : ''}</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }

}

export default RestaurantCard;