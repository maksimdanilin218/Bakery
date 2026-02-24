import style from "./MenuComponent.module.css"
import MenuComponentDesktop from "./MenuComponentDesktop/MenuComponentDesktop.jsx"
import MenuComponentMobile from "./MenuComponentMobile/MenuComponentMobile.jsx"

export default function MenuComponent() {
    return (
        <header className={style.header}>
            <MenuComponentDesktop />
            <MenuComponentMobile />
        </header>
    )
}