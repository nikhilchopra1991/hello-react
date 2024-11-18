import { BASE_PATH_LOGO } from "../utils/constants";

const ItemList = ({items}) => {
    return(
        <div>
            {items.map((item => 
            <div key={item.card?.info?.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between" >
                
                <div className="w-9/12">
                    <div className="py-2">
                        <span>{item?.card?.info?.name}</span>
                        <span> - ₹{item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 p-4">
                    <button className="p-2 bg-black text-white shadow-lg absolute m-auto rounded-lg">Add</button>
                    <img src={BASE_PATH_LOGO + item?.card?.info?.imageId} className="w-24 h-auto m-2 "></img>
                </div>
            </div>
        ))}
        </div>
    )
}

export default ItemList;