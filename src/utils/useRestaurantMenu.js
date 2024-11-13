import { useState, useEffect } from "react";
import { SWIGGY_MENU_ITEMS_URL } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenuItems();
    },[]);

    fetchMenuItems = async () => {
        const data = await fetch(SWIGGY_MENU_ITEMS_URL + resId);
        const json = await data.json();
        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu;