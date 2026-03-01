import style from "./RecipesSection.module.css"

const recipesData = [
    {
        id: 11,
        category: "Recipes",
        title: "Classic Butter Croissants",
        description: "Master the art of baking flaky, golden croissants with delicate buttery layers",
        img: "./BlogComponentImage/BlogList/Recipes/recipes1.png",
        date: "April 18, 2024"
    },
    {
        id: 21,
        category: "Recipes",
        title: "Perfect Artisan Sourdough",
        description: "Learn the secrets behind a crispy crust and soft, airy sourdough interior",
        date: "March 28, 2024",
        img: "./BlogComponentImage/BlogList/Recipes/recipes4.png",
    },
    {
        id: 31,
        category: "Recipes",
        title: "Lemon cream tart",
        description: "A refreshing lemon tart with smooth citrus filling and buttery crust",
        date: "March 28, 2024",
        img: "./BlogComponentImage/BlogList/Recipes/recipes2.png",
    },
    {
        id: 41,
        category: "Recipes",
        title: "Soft Cinnamon Rolls",
        description: "Warm, fluffy cinnamon rolls topped with creamy vanilla glaze",
        date: "March 28, 2024",
        img: "./BlogComponentImage/BlogList/Recipes/recipes3.png",
    },
    {
        id: 51,
        category: "Recipes",
        title: "Whole Grain Seeded Buns",
        description: "Healthy whole grain buns packed with seeds and rich flavor",
        date: "March 28, 2024",
        img: "./BlogComponentImage/BlogList/Recipes/recipes5.png",
    },
    {
        id: 61,
        category: "Recipes",
        title: "Beginners Baking Eddentials",
        description: "Essential baking techniques every home baker should khow",
        date: "March 28, 2024",
        img: "./BlogComponentImage/BlogList/Recipes/recipes6.png",
    },
]

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