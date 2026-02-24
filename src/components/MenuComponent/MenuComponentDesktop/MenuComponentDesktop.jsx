import style from "./MenuComponentDesktop.module.css"
import MenuComponentItem from "../MenuComponentItem/MenuComponentItem.jsx"
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
                <MenuComponentItem to="/" title="Home" />
                <MenuComponentItem to="/blog" title="Blog" />
                <MenuComponentItem to="/contact" title="Contact" />
                <MenuComponentItem to="/service" title="Service" />
            </ul>
            <div className={style.timeContainer}>
                <h1 className={style.time}>{time.toLocaleTimeString()}</h1>
            </div>
        </div>
    )
}