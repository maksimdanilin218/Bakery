import style from "./InsprationSection.module.css"

const insprationData = [
    {
        id: 10,
        category: "Inspiration",
        title: "Beautiful Bread Art Ideas",
        date: "April 20, 2024",
        description: "Get inspired by stunning bread designs. Discover creative and beautiful bread art ideas to try at home.",
        img: "./BlogComponentImage/BlogList/Inspration/inspration1.png"
    },
    {
        id: 20,
        category: "Inspiration",
        title: "5 Cozy Pastry Recipes for a Rainy Day",
        date: "April 12, 2024",
        description: "Indulge in these warm, comforting pastries perfect for enjoying on a cozy, rainy day.",
        img: "./BlogComponentImage/BlogList/Inspration/inspration2.png"
    },
    {
        id: 30,
        category: "Inspiration",
        title: "Decorating Cakes: 7 Inspiring Ideas",
        date: "April 5, 2024",
        description: "Elevate your cake decorating skills with these 7 creative and beautiful cake ideas.",
        img: "./BlogComponentImage/BlogList/Inspration/inspration3.png"
    },
    {
        id: 40,
        category: "Inspiration",
        title: "Artisan Bread Inspo for Home Bakers",
        date: "April 16, 2024",
        description: "Find inspiration for baking artisan bread at home. Explore different shapes, scoring and toppings.",
        img: "./BlogComponentImage/BlogList/Inspration/inspration4.png"
    },
    {
        id: 50,
        category: "Inspiration",
        title: "The Most Gorgeous Tarts and Pies",
        date: "March 26, 2024",
        description: "Feast your eyes on the most beautiful and delicious tarts and pies. Get inspired to take your own.",
        img: "./BlogComponentImage/BlogList/Inspration/inspration5.png"
    },
    {
        id: 60,
        category: "Inspiration",
        title: "Rustic Bakery Interiors: A Tour",
        date: "March 20, 2024",
        description: "Take a look through cozy, rustic bakery interiors and get inspired for your own space.",
        img: "./BlogComponentImage/BlogList/Inspration/inspration6.png"
    }
];


function InsprationCard({ img, description, title, date, category }) {
    return (
        <div className={style.InsprationCard}>
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

function InsprationSection() {
    return (
        <div className={style.container}>
            {insprationData.map((events) => (
                <InsprationCard key={events.id} category={events.category} title={events.title} description={events.description} img={events.img} date={events.date} />
            ))}
        </div>
    )
}

export default InsprationSection