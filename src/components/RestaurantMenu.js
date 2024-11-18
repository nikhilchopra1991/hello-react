import { useEffect, useState } from "react";
import {SWIGGY_MENU_ITEMS_URL} from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(null);
    const {resId} = useParams();
    
    menuItems = useRestaurantMenu(resId);

    if (menuItems === null) return <Shimmer></Shimmer>;

    const { name, cuisines, costForTwoMessage } = menuItems?.cards[2]?.card?.card?.info;
    const categories = menuItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
        <div className="text-center">
            <h4 className="font-extrabold text-2xl text-center p-4">{name}</h4>
            <p className="text-center font-bold">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {categories.map((category, index) => (
                <RestaurantCategory 
                    key={category.card?.card?.title}
                    data={category.card?.card} 
                    showItems = {index === showIndex ? true : false}
                    setShowIndex = {() => setShowIndex(index)}
                />
            ))}
            
        </div>
    )
}

export default RestaurantMenu;