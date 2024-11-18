import { useContext } from "react";
import { BASE_PATH_LOGO } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const {name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId} = props.data?.info;
    const {userName} = useContext(UserContext);
    return (
        <div className="m-4 p-4 w-[300px]  bg-gray-200 hover:bg-gray-300">
            <img
                src={BASE_PATH_LOGO + cloudinaryImageId}
                className="rounded-lg w-[280px] h-44"
                alt="res-logo"
            ></img>
            <h3 className="my-4 font-bold text-lg">{name}</h3>
            <h4 className="italic">{cuisines.join(", ")}</h4>
            <h4 className="my-2">Ratings - {avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4 className="my-2">{sla?.deliveryTime + " minutes"}</h4>
            <h4>{userName}</h4>
        </div>
    )
}

export const usePromotedlabel = (RestaurantCard) => {
    return (props) => {
        return(
            <div>
                <label className="absolute bg-black m-2 p-2 rounded-lg text-white">Promoted</label>
                <RestaurantCard {...props}></RestaurantCard>
            </div>
        )
    }
}

export default RestaurantCard;