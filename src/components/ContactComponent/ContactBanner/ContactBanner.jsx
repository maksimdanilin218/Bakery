import style from "./ContactBanner.module.css"

export default function ContatcBanner(){
    return(
        <div className={style.container}>
            <div className={style.contactInfo}>
                <h1 className={style.title}>Contact Us</h1>
                <p className={style.text}>We’d love to hear from you! Whether you have a question about our freshly baked goods, custom orders, catering services, or simply want to say hello — our team is always happy to help. Reach out and we’ll get back to you as soon as possible.</p>
            </div>
        </div>
    )
}