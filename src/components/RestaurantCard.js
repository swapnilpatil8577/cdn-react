import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => {
    const {resData} = props
    const {name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla} = resData
    const {slaString} = sla
    return (
        <div className="m-4 p-4 w-[250px] h-[460px] rounded-lg bg-gray-100 hover:bg-pink-100">
            <img className="rounded-lg h-52 w-60" alt="res-logo" src={CDN_URL+cloudinaryImageId}></img>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4 className="truncate">{cuisines.join(",")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{slaString}</h4>
        </div>
    )
}

export default RestaurantCard;