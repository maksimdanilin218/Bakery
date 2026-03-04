import style from "./ContactInformation.module.css"
import InformationItem from "./InformationItem/InformationItem"

export default function ContactInformation(){
    return(
        <div className={style.container}>
            <h1 className={style.title}>Contact Information</h1>
            <InformationItem />
        </div>
    )
}

