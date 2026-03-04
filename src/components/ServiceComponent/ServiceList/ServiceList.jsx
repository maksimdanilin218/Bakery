import style from "./ServiceList.module.css"
import { serviceListData } from "./ServiceData"

function ServiceListCard({img, icon, title, description}){
    return(
        <div className={style.card}>
            <div className={style.cardImg}>
                <img className={style.img} src={img} alt="" />
                <img className={style.icon} src={icon} alt="" />
            </div>
            <div className={style.cardInfo}>
                <h1 className={style.title}>{title}</h1>
                <p className={style.description}>{description}</p>
                <button className={style.btn}>Learn More</button>
            </div>
        </div>
    )
}

function ServiceSection(){
    return(
        <div className={style.container}>
            {serviceListData.map((service) => (
                <ServiceListCard key={service.id} img={service.img} icon={service.icon} title={service.title} description={service.description}/>
            ))}
        </div>
    )
}

export default ServiceSection