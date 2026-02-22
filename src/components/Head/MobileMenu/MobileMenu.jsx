import style from "./MobileMenu.module.css"
import logo from "/img/logo.svg"
import { useState } from "react"
import MobileMenuItem from "./MobileMenuItem/MobileMenuItem.jsx"

export default function MobileMenu() {
    // Burger menu
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    // time
    const [time, setTime] = useState(new Date())
    setInterval(() => setTime(new Date()), 1000)


    return (
        <div className={style.header}>
            <div className={style.container}>
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
                        <MobileMenuItem title="Home" />
                        <MobileMenuItem title="Blog" />
                        <MobileMenuItem title="Service" />
                        <MobileMenuItem title="Contact" />
                    </ul>
                </nav>
                {/* Logo */}
                <img className={style.logo} src={logo} alt="" />
                {/* time */}
                <div className={style.timeContainer}>
                    <h1 className={style.time}>{time.toLocaleTimeString()}</h1>
                </div>
            </div>
        </div>
    )
}