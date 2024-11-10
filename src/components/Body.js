import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react"; // Concentrate on named import, hooks are just normal JS functions
import { SWIGGY_BASE_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
    const [inputValue, setInputValue] = useState("");

    console.log("rerendered");
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_BASE_URL);
        const json = await data.json();
        setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // Conditional Rendering
    return listOfRestaurants?.length === 0 ? (
        <Shimmer></Shimmer>
    ) :
     (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                        className="search-box" 
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                        }}
                    >
                    </input>
                    <button 
                        className="search-btn"
                        onClick={() => {
                            filteredListOfRes = listOfRestaurants.filter(x => x.info?.name.toLowerCase().includes(inputValue.toLowerCase()));
                            setFilteredListOfRestaurants(filteredListOfRes);
                        }}
                    >
                        Search Over Here
                    </button>
                </div>
                <div>
                <button 
                    className="filter-btn"
                    onClick={() => {
                        const mostStarRatedData = filteredListOfRestaurants.filter(x => x.info.avgRating > 4.2);
                        setFilteredListOfRestaurants(mostStarRatedData);
                    }}
                >
                    Top Rated Restaurants
                </button>
                </div>
                
            </div>
            <div className="res-container">
                {filteredListOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.id} data={restaurant}></RestaurantCard>)}
            </div>
        </div>
    )
}

export default Body;