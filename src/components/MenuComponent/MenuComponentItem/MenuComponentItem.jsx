import style from "./MenuComponentItem.module.css"
import { Link } from "react-router-dom"

export default function MenuComponentItem({title, to}){
    return(
        <li className={style.MenuItem}>
            <Link className={style.title} to={to}>{title}</Link>
        </li>
    )
}