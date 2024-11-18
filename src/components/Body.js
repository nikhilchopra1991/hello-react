import RestaurantCard, {usePromotedlabel} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react"; // Concentrate on named import, hooks are just normal JS functions
import { SWIGGY_BASE_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const RestaurantCardPromoted = usePromotedlabel(RestaurantCard);

    const {userName, setUserName} = useContext(UserContext);

    console.log("rerendered");
    useEffect(() => {
        fetchData();
    },[]);

    useEffect(() => {
        console.log("use Effect rendered");
    },[inputValue])

    const fetchData = async () => {
        const data = await fetch(SWIGGY_BASE_URL);
        let json = await data.json();
        json = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setlistOfRestaurants(json);
        setFilteredListOfRestaurants(json);
    }

    const onlineStatus = useOnlineStatus();

    if(!onlineStatus) return <h4>You are offline</h4>;

    // Conditional Rendering
    return listOfRestaurants?.length === 0 ? (
        <Shimmer></Shimmer>
    ) :
     (
        <div className="body">
            <div className="flex">
                <div className="m-4 p-4">
                    <input 
                        className="m-4 border border-solid border-black" 
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                        }}
                    >
                    </input>
                    <button 
                        className="bg-green-300 px-4 py-2 rounded-lg"
                        onClick={() => {
                            filteredListOfRes = listOfRestaurants.filter(x => x.info?.name.toLowerCase().includes(inputValue.toLowerCase()));
                            setFilteredListOfRestaurants(filteredListOfRes);
                        }}
                    >
                        Search Over Here
                    </button>
                </div>
                <div className="m-4 p-4">
                    <button 
                        className="bg-blue-300 px-4 py-2 my-2 rounded-lg"
                        onClick={() => {
                            const mostStarRatedData = filteredListOfRestaurants.filter(x => x.info.avgRating > 4.2);
                            setFilteredListOfRestaurants(mostStarRatedData);
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="m-4 p-4">
                    <label>User: </label>
                <input 
                        className="m-4 border border-solid border-black" 
                        value={userName}
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                    >
                    </input>
                </div>
                
            </div>
            <div className="flex flex-wrap">
                {filteredListOfRestaurants.map(restaurant => 
                    <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}>
                        {restaurant.info.isOpen ? 
                            <RestaurantCardPromoted data={restaurant}></RestaurantCardPromoted> : 
                            <RestaurantCard data={restaurant}></RestaurantCard>
                        }
                        
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Body;