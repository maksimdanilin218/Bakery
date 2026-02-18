import logo from "/img/logo.svg"
import style from "./HeadMenu.module.css"
import MenuItem from "./MenuItem/MenuItem.jsx"
import { useState } from 'react'



export default function HeadMenu() {
    const [time, setTime] = useState(new Date())
    setInterval(() => setTime(new Date()), 1000)

    return (
        <header className={style.header}>
            <div className={style.HeadMenu}>
                <img className={style.logoItem} src={logo} alt="" />
                <ul>
                    <MenuItem title="Home" />
                    <MenuItem title="Blog" />
                    <MenuItem title="Contact" />
                    <MenuItem title="Service" />
                </ul>
                <div className={style.timeContainer}>
                    <h1 className={style.time}>{time.toLocaleTimeString()}</h1>
                </div>
            </div>
        </header>
    )
}