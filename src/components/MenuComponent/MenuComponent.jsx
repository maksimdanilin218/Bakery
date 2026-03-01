import style from "./MenuComponent.module.css"
import MenuComponentDesktop from "./MenuComponentDesktop/MenuComponentDesktop"
import MenuComponentMobile from "./MenuComponentMobile/MenuComponentMobile"

export default function MenuComponent() {
    return (
        <header className={style.header}>
            <MenuComponentDesktop />
            <MenuComponentMobile />
        </header>
    )
}