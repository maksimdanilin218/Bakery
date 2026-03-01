import style from "./EventSection.module.css"

const eventData = [
    {
        id: 1,
        category: "Events",
        title: "Spring Baking Masterclass",
        date: "April 22, 2024",
        description: "Join our expert bakers for a hands-on masterclass and learn how to create stunning spring pastries.",
        img: './BlogComponentImage/BlogList/Event/eventCard1.jpg'
    },
    {
        id: 2,
        category: "Events",
        title: "Cupcake Decorating Workshop",
        date: "April 18, 2024",
        description: "Learn fun and creative cupcake decorating techniques in this interactive workshop.",
        img: './BlogComponentImage/BlogList/Event/eventCard2.jpg'
    },
    {
        id: 3,
        category: "Events",
        title: "Family Baking Day",
        date: "April 14, 2024",
        description: "Bring your family and enjoy a fun-filled day of baking and sweet treats together.",
        img: "./BlogComponentImage/BlogList/Event/eventCard3.jpg"
    },
    {
        id: 4,
        category: "Events",
        title: "Artisan Bread Tasting Night",
        date: "April 9, 2024",
        description: "Sample our finest artisan breads and learn about the baking process from our chefs.",
        img: "./BlogComponentImage/BlogList/Event/eventCard4.jpg"
    },
    {
        id: 5,
        category: "Events",
        title: "Kids Cookie Making Class",
        date: "April 4, 2024",
        description: "A fun cookie-making class designed especially for kids to explore baking creativity.",
        img: "./BlogComponentImage/BlogList/Event/eventCard5.jpg"
    },
    {
        id: 6,
        category: "Events",
        title: "Summer Menu Preview Night",
        date: "March 30, 2024",
        description: "Be the first to taste our upcoming summer menu at this exclusive preview event.",
        img: "./BlogComponentImage/BlogList/Event/eventCard6.jpg"
    }
];
function EventCard({ img, description, title, date, category }) {
    return (
        <div className={style.EventCard}>
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

function EventSection() {
    return (
        <div className={style.container}>
            {eventData.map((events) => (
                <EventCard key={events.id} category={events.category} title={events.title} description={events.description} img={events.img} date={events.date} />
            ))}
        </div>
    )
}

export default EventSection