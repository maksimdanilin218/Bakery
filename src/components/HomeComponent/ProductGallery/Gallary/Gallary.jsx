import style from  "./Gallary.module.css"

import MuffinsList from "./MuffinsList/MuffinsList.jsx"
import CroissantList from "./CroissantList/CroissantList.jsx"
import TartList from "./TartList/TartList.jsx"
import FavoriteList from "./FavoriteList/FavoriteList.jsx"
import BreadList from "./BreadList/BreadList.jsx"

export default function Gallary(){

    return(
        <div className={style.Gallary}>
            {/* <CakeList /> */}
            <MuffinsList />
            <CroissantList />
            <TartList />
            <FavoriteList />
            <BreadList />
        </div>
    )
}