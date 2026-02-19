import style from "./MobileMenuItem.module.css"

export default function MobileMenuItem(props) {
    return (
        <li className={style.text}>{props.title}</li>
    )
}