import style from "./TipsSection.module.css"

const tipsData = [
    {
        id: 12,
        category: "Tips",
        date: "June 25, 2026",
        title: "How to Store Freash Bread Properly",
        description: "Learn the best ways to keep your bread fresh longer without losing texture",
        img: "./BlogComponentImage/BlogList/Tips/tips1.png"
    },
    {
        id: 22,
        category: "Tips",
        date: "June 25, 2026",
        title: "Secret to Perfect Dought Rise",
        description: "Understand fermentation temperature, and yeast activation for better baking",
        img: "./BlogComponentImage/BlogList/Tips/tips2.png"
    },
    {
        id: 32,
        category: "Tips",
        date: "June 25, 2026",
        title: "Choosing the Right Flour",
        description: "Discovery the difference between all-purpose, bread, and pastry flour",
        img: "./BlogComponentImage/BlogList/Tips/tips3.png"
    },
    {
        id: 42,
        category: "Tips",
        date: "June 25, 2026",
        title: "How to Make Your Pastries Crispier",
        description: "Simple tricks to achieve that golden, crispy crust every time",
        img: "./BlogComponentImage/BlogList/Tips/tips4.png"
    },
    {
        id: 52,
        category: "Tips",
        date: "June 25, 2026",
        title: "Avoid Common Baking Mistakes",
        description: "The most frequent beginner mistakes and how to avoid them easily",
        img: "./BlogComponentImage/BlogList/Tips/tips5.png"
    },
    {
        id: 62,
        category: "Tips",
        date: "June 25, 2026",
        title: "How to Measure Ingredients Correctly",
        description: "Why accurate measuring natters and how to doit like a pro baker",
        img: "./BlogComponentImage/BlogList/Tips/tips6.png"
    },
]


function TipsCard({ img, description, title, date, category }) {
    return (
        <div className={style.TipsCard}>
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
            {tipsData.map((events) => (
                <TipsCard key={events.id} category={events.category} title={events.title} description={events.description} img={events.img} date={events.date} />
            ))}
        </div>
    )
}

export default RecipesSection