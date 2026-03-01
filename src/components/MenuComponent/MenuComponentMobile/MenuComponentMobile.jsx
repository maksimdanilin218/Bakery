import { useState } from "react";
import style from "./MenuComponentMobile.module.css"
import MenuComponentItem from "../MenuComponentItem/MenuComponentItem.jsx"
import { NavLink } from "react-router-dom";
import logo from "/img/newLogo.png"

export default function MenuComponentMobile() {
    // Burger menu
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    // time
    const [time, setTime] = useState(new Date())
    setInterval(() => setTime(new Date()), 1000)


    return (
        <div className={style.MobileContainer}>
            {/* birger */}
            <div className={style.burgerContainer}>
                <div className={`${style.burger} ${isOpen ? style.active : ''}`} onClick={toggleMenu}>
                    <span className={style.span}></span>
                    <span className={style.span}></span>
                    <span className={style.span}></span>
                </div>
            </div>
            {/* overlay */}
            <div className={`${style.overlay} ${isOpen ? style.show : ""}`} onClick={toggleMenu}></div>
            {/* Menu */}
            <nav className={`${style.menu} ${isOpen ? style.open : ""}`}>
                <ul className={style.ul}>
                    <NavLink className={style.link} to="/home">Home</NavLink>
                    <NavLink className={style.link} to="/blog">Blog</NavLink>
                    <NavLink className={style.link} to="/contact">Contatc</NavLink>
                    <NavLink className={style.link} to="/service">Servive</NavLink>
                </ul>
            </nav>
            {/* Logo */}
            <img className={style.logo} src={logo} alt="" />
            {/* time */}
            <div className={style.timeContainer}>
                <h1 className={style.time}>{time.toLocaleTimeString()}</h1>
            </div>
        </div>
    )
}