import { BASE_PATH_LOGO } from "../utils/constants";

const RestaurantCard = (props) => {
    const {name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId} = props.data?.info;
    return (
        <div className="res-card">
            <img
                src={BASE_PATH_LOGO + cloudinaryImageId}
                className="res-logo"
                alt="res-logo"
            ></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.deliveryTime + " minutes"}</h4>
        </div>
    )
}

export default RestaurantCard;