import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [btnText, setBtnTxt] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const {userName} = useContext(UserContext);
    return(
        <div className="flex justify-between bg-pink-100">
            <div className="logo-container">
                <img 
                    src={LOGO_URL}
                    className="w-56 h-48" >
                </img>
            </div>
            <div className="flex items-center">
                <ul className="flex">
                    <li className="m-4 p-4">
                        Online Status:
                        {onlineStatus ? "🟢" : " 🔴"}
                    </li>
                    <li className="m-4 p-4">
                        <Link to="./">Home</Link>
                    </li>
                    <li className="m-4 p-4">
                        <Link to="./grocery">Grocery</Link>
                    </li>
                    <li className="m-4 p-4">
                        <Link to="./about">About</Link>
                    </li>
                    <li className="m-4 p-4">
                        <Link to="/contact" >Contact Us</Link>
                    </li>
                    <li className="m-4 p-4">{userName}</li>
                    <li>
                    <button 
                    className="m-4 p-4"
                    onClick = { () => {
                        btnText === "Login" ?
                        setBtnTxt("Logout") : 
                        setBtnTxt("Login")
                    }}
                >
                    {btnText}
                </button>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}

export default Header;
