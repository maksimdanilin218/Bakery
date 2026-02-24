import { useState } from 'react'
import style from './CategoryTabs.module.css'
import CakeList from "../Gallary/CakeList/CakeList.jsx"
import MuffinsList from "../Gallary/MuffinsList/MuffinsList.jsx"
import CroissantList from "../Gallary/CroissantList/CroissantList.jsx"
import TartList from "../Gallary/TartList/TartList.jsx"
import BreadList from "../Gallary/BreadList/BreadList.jsx"
import FavoriteList from "../Gallary/FavoriteList/FavoriteList.jsx"

export default function CategoryTabs() {

    const [activeCategory, setActiveCategory] = useState('favorits')

    return (
        <section className={style.CategoryTabs}>
            <div className={style.container}>
                <button onClick={() => setActiveCategory('cakes')} className={style.item__btn}>Cake</button>
                <button onClick={() => setActiveCategory('muffins')} className={style.item__btn}>Muffins</button>
                <button onClick={() => setActiveCategory('croissants')} className={style.item__btn}>Croissant</button>
                <button onClick={() => setActiveCategory('breads')} className={style.item__btn}>Bread</button>
                <button onClick={() => setActiveCategory('tarts')} className={style.item__btn}>Tart</button>
                <button onClick={() => setActiveCategory('favorits')} className={style.item__btn}>Favorite</button>

                {activeCategory === 'cakes' && <CakeList />}
                {activeCategory === 'muffins' && <MuffinsList />}
                {activeCategory === 'croissants' && <CroissantList />}
                {activeCategory === 'tarts' && <TartList />}
                {activeCategory === 'breads' && <BreadList />}
                {activeCategory === 'favorits' && <FavoriteList />}
            </div>
        </section>
    )
}