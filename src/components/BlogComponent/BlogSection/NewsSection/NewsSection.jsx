import style from "./NewsSection.module.css"

const newsData = [
    {
        id: 100,
        category: "News",
        title: "New Seasonal Menu: Spring Delights",
        date: "April 20, 2024",
        description: "Discover our fresh, seasonal menu featuring delicious spring-inspired pastries.",
        img: "./BlogComponentImage/BlogList/NewsSection/news1.png"
    },
    {
        id: 200,
        category: "News",
        title: "Join Us for a Bread Baking Workshop!",
        date: "April 16, 2024",
        description: "Sign up for our hands-on bread baking workshop and learn from our expert bakers.",
        img: "./BlogComponentImage/BlogList/NewsSection/news2.png"
    },
    {
        id: 300,
        category: "News",
        title: "Celebrating National Sourdough Day",
        date: "April 12, 2024",
        description: "Celebrate National Sourdough Day with us and enjoy special sourdough treats and discounts.",
        img: "./BlogComponentImage/BlogList/NewsSection/news3.png"
    },
    {
        id: 400,
        category: "News",
        title: "Our Bakery Featured in 'Best of the City'",
        date: "April 5, 2024",
        description: "We're thrilled to be recognized as one of the best local bakeries in the city.",
        img: "./BlogComponentImage/BlogList/NewsSection/news4.png"
    },
    {
        id: 500,
        category: "News",
        title: "Behind the Scenes: A Day in Our Bakery",
        date: "March 28, 2024",
        description: "Take a peek behind the scenes and see what it's like to work in our bustling bakery.",
        img: "./BlogComponentImage/BlogList/NewsSection/news5.png"
    },
    {
        id: 600,
        category: "News",
        title: "Local Farmers’ Market Opening Soon!",
        date: "March 20, 2024",
        description: "Get ready for our local farmers market opening this spring, featuring fresh ingredients and baked goods.",
        img: "./BlogComponentImage/BlogList/NewsSection/news6.png"
    }
];

function NewsCard({ img, description, title, date, category }) {
    return (
        <div className={style.NewsCard}>
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

function NewsSection() {
    return (
        <div className={style.container}>
            {newsData.map((events) => (
                <NewsCard key={events.id} category={events.category} title={events.title} description={events.description} img={events.img} date={events.date} />
            ))}
        </div>
    )
}

export default NewsSection