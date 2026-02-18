import style from './Featured.module.css'
import FeaturedCard from './FeaturedCard/FeaturedCard.jsx'

export default function Featured(){
    return(
        <section className={style.featured}>
            <h1 className={style.title}>Featured Treats</h1>
            <div className={style.container}>
                <FeaturedCard />
            </div>
        </section>
    )
}