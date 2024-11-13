import { useEffect, useState } from "react";
import {SWIGGY_MENU_ITEMS_URL} from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    // const [menuItems, setMenuItems] = useState(null);
    const {resId} = useParams();
    console.log(resId);
    
    menuItems = useRestaurantMenu(resId);
    // Below code is moved to Hook useRestaurantMenu
    // useEffect(() => {
    //     fetchMenuItems();
    //     console.log(menuItems);
    // },[]);

    // const fetchMenuItems = async () => {
    //     const data = (await fetch(SWIGGY_MENU_ITEMS_URL + resId));
    //     const items = await data.json();
    //     setMenuItems(items.data);
    // }

    if (menuItems === null) return <Shimmer></Shimmer>;


    const { name, cuisines, costForTwoMessage } = menuItems?.cards[2]?.card?.card?.info;
    const {itemCards} = menuItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="res-menu-container">
            <h4>{name}</h4>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h4>Menu</h4>
            <ul>
                {
                    itemCards.map(item => (
                        <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {" Rs."} {item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100}</li>
                    ))
                }
            </ul>
        </div>
    )
}

// data.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards

export default RestaurantMenu;