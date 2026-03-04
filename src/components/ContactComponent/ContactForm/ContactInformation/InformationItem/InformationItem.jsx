import style from "./InformationItem.module.css"
import { contactData } from "./contactData"

function InformationCard({ icon, title, description, id }) {
    return (
        <div className="">
            <div className={style.container}>
                <img className={style.icon} src={icon} alt="" />
                <div className={style.info}>
                    <h4 className={style.title}>{title}</h4>
                    <p className={style.text}>{description}</p>
                </div>
            </div>
            <hr />
        </div>
    )
}

function InformationItem() {
    return (
        <div className={style.InformationItem}>
            {contactData.map((item) => (
                <InformationCard key={item.id} title={item.title} icon={item.icon} description={item.description} />
            ))}
        </div>
    )
}

export default InformationItem