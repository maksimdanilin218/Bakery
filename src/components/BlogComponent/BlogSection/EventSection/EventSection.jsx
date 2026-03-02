import style from "./EventSection.module.css"
import { eventData } from "./eventData"

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