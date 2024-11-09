import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react"; // Concentrate on named import, hooks are just normal JS functions
import { SWIGGY_BASE_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_BASE_URL);
        const json = await data.json();
        setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // Conditional Rendering
    return listOfRestaurants?.length === 0 ? (
        <Shimmer></Shimmer>
    ) :
     (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn"
                    onClick={() => {
                        const mostStarRatedData = listOfRestaurants.filter(x => x.info.avgRating > 4.2);
                        setlistOfRestaurants(mostStarRatedData);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.id} data={restaurant}></RestaurantCard>)}
            </div>
        </div>
    )
}

export default Body;