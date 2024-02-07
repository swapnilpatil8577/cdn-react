import { LOGO_URL } from "../utils/constants";
import { useContext, useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus()

    const {isLoggedInUser} = useContext(UserContext)

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4 hover:border border-solid border-black rounded-lg">Online Status: {(onlineStatus) ? "Online" : "Offline"  }</li>
                    <li className="px-4 hover:border border-solid border-black rounded-lg"><Link to="/">Home</Link></li>
                    <li className="px-4 hover:border border-solid border-black rounded-lg"><Link to="/about">About Us</Link></li>
                    <li className="px-4 hover:border border-solid border-black rounded-lg"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4 hover:border border-solid border-black rounded-lg"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 hover:border border-solid border-black rounded-lg">Cart</li>
                    <button 
                        className="login-btn" 
                        onClick={() => {
                            btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                        }}
                    >{btnNameReact}</button>
                    <li className="px-4 font-bold">{isLoggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;