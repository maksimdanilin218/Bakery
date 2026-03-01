import { useState } from "react"
import style from "./BlogCategory.module.css"
import EventSection from "../BlogSection/EventSection/EventSection"
import RecipesSection from "../BlogSection/RecipesSection/RecipesSection"
import TipsSection from "../BlogSection/TipsSection/TipsSecrion"
import NewsSection from "../BlogSection/NewsSection/NewsSection"
import InsprationSection from "../BlogSection/InsprationSection/InsprationSection"

export default function BLogCategory() {
    const [activeCategory, setActiveCategory] = useState('events')

    return (
        <div className={style.CategoryContainer}>
            <button onClick={() => setActiveCategory('news')} className={style.btn}>News</button>
            <button onClick={() => setActiveCategory('recipes')} className={style.btn}>Recipes</button>
            <button onClick={() => setActiveCategory('tips')} className={style.btn}>Tips</button>
            <button onClick={() => setActiveCategory('insprations')} className={style.btn}>Inspration</button>
            <button onClick={() => setActiveCategory('events')} className={style.btn}>Events</button>

            {activeCategory === 'events' && <EventSection />}
            {activeCategory === 'recipes' && <RecipesSection />}
            {activeCategory === 'tips' && <TipsSection />}
            {activeCategory === 'news' && <NewsSection />}
            {activeCategory === 'insprations' && <InsprationSection />}
        </div>
    )
}