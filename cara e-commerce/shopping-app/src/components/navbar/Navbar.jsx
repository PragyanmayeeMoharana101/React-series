import "boxicons"
import { assets } from "../../assets/assets"
import "./Navbar.css"
import { useState } from "react"
export default function Navbar(){
    const [menu,setMenu] = useState("home");
    return(
        <div className="navbar">
            <img src={assets.logo} alt="" />
            <ul className="navbar-menu">
                <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
                <li onClick={()=>setMenu("shop")} className={menu==="shop"?"active":""}>Shop</li>
                <li onClick={()=>setMenu("blog")} className={menu==="blog"?"active":""}>Blog</li>
                <li onClick={()=>setMenu("about")} className={menu==="about"?"active":""}>About</li>
                <li onClick={()=>setMenu("contact")} className={menu==="contact"?"active":""}>Contact</li>
                <li onClick={()=>setMenu("cart")} className={menu==="cart"?"active":""}><box-icon name='shopping-bag'></box-icon></li>
            </ul>
        </div>
    )
}