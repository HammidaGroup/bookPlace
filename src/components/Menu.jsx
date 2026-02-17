import React, { useContext } from "react";
import "./Menu.css"
import homepng from "../assets/home.png";
import aboutmepng from "../assets/aboutMe.png";
import contactUspng from "../assets/contactUS.png";
import privacypng from "../assets/privacy-policy.png";
import addpng  from "../assets/add.png"
import logoutpng from "../assets/logout.png"
import deshboardpng from "../assets/dashboard.png"
import favoritePng from "../assets/favorite-black.png"
import { Link } from "react-router-dom";
import { MenuLogicContext } from "../context/menuLogicContext";

const Menu = () => {
    const menuConditionalState = useContext(MenuLogicContext);
let menu ;
// console.log(menuConditionalState.menuVisbleConditionalData);

const logoutHandler = () => {
  localStorage.removeItem("token");
  window.location.href = "/"; // Redirect to home page after logout
}

if(menuConditionalState.menuVisbleConditionalData == true){
    menu = (
        <nav className="menu-box" >
                <h2>Menu</h2>
                <ul>
                  
                   <Link to="/">
                    <li>
                        <div>
                            
                            <img className="menu-btn" src={homepng} alt="Home Icon"/>
                                <span>Home</span>
                        </div>
                    </li>
                   </Link>
                         
                   <Link to="/AddBook">
                    <li>
                        <div>
                            
                            <img className="menu-btn" src={addpng} alt="Home Icon"/>
                                <span>Add Book</span>
                        </div>
                    </li>
                   </Link>
                         
                    <li>
                        <div>
                            <img className="menu-btn" src={contactUspng} alt="Contact Us Icon"/>
                                <span>Contact Us</span>
                        </div>
                    </li>
<Link to="/About">
                    <li>
                        <div>
                            <img className="menu-btn" src={aboutmepng} alt="Contact Us Icon"/>
                                <span>About Me</span>
                        </div>
                    </li>

</Link>
                    <li>
                        <div>
                            <img className="menu-btn" src={privacypng}alt="Privacy Policy Icon"/>
                                <span>Privacy Policy </span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img onClick={logoutHandler} className="menu-btn" src={logoutpng}alt="Logout Icon"/>
                                <span>Logout</span>
                        </div>
                    </li>
                    

                </ul>
            </nav>
    )
    // setMenuVisibleContion(true)
}else{
    menu="";
    // setMenuVisibleContion(true)
}
    return (
        <>
         {menu}
            
        </>
    )
}
export default Menu;