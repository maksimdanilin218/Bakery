import style from "./ContactForm.module.css"
import ContactInformation from "./ContactInformation/ContactInformation"
import ContactFormSection from "./ContactFormSection/ContactFormSection"

export default function ContactForm(){
    return(
        <div className={style.container}>
            <ContactInformation />
            <ContactFormSection />
        </div>
    )
}