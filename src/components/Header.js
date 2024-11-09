import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [btnText, setBtnTxt] = useState("Login");
    return(
        <div className="heading">
            <div className="logo-container">
                <img 
                    src={LOGO_URL}
                    className="logo" >
                </img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
                <button 
                    className="btn-login"
                    onClick = { () => {
                        btnText === "Login" ?
                        setBtnTxt("Logout") : 
                        setBtnTxt("Login")
                    }}
                >
                    {btnText}
                </button>
            </div>
        </div>
    )
}

export default Header;
