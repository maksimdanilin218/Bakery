import style from "./RecipesSection.module.css"
import { recipesData } from "./recipesData"

function RecipesCard({ img, description, title, date, category }) {
    return (
        <div className={style.RecipesCard}>
            <div className={style.cardImg}>
                <img className={style.img} src={img} alt="" />
                <h3 className={style.category}>{category}</h3>
            </div>
            <div className={style.cardInfo}>
                <h3 className={style.title}>{title}</h3>
                <p className={style.date}>{date}</p>
                <p className={style.description}>{description}</p>
                <button className={style.btn}>Read More</button>
            </div>
        </div>
    )
}

function RecipesSection() {
    return (
        <div className={style.container}>
            {recipesData.map((events) => (
                <RecipesCard key={events.id} category={events.category} title={events.title} description={events.description} img={events.img} date={events.date} />
            ))}
        </div>
    )
}

export default RecipesSection