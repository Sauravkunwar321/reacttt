import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

const [reactBtn, setReactBtn] = useState("Login");

console.log('header called')

useEffect(() => {
  console.log("useeffect called");

}, [reactBtn]);

  const btnName="Login";
    return (
      <div className="header">
        <div className="logo">
          <img src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact us</li>
            <li>cart</li>
            <button className="login" onClick={()=> {
              reactBtn === "Login" ? setReactBtn("Logout"): setReactBtn("Login");

            }}>{reactBtn}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;


