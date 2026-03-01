import style from "./MenuComponentDesktop.module.css"
import MenuComponentItem from "../MenuComponentItem/MenuComponentItem.jsx"
import { NavLink } from "react-router-dom"
import logo from "/img/newLogo.png"
import { useState } from "react"

export default function MenuComponentDesktop() {
    // time
    const [time, setTime] = useState(new Date())
    setInterval(() => setTime(new Date()), 1000)

    return (
        <div className={style.DesktopContainer}>
            <img className={style.logo} src={logo} alt="" />
            <ul className={style.ul}>
                <NavLink className={style.link} to="/home">Home</NavLink>
                <NavLink className={style.link} to="/blog">Blog</NavLink>
                <NavLink className={style.link} to="/contact">Contatc</NavLink>
                <NavLink className={style.link} to="/service">Servive</NavLink>
            </ul>
            <div className={style.timeContainer}>
                <h1 className={style.time}>{time.toLocaleTimeString()}</h1>
            </div>
        </div>
    )
}