import style from "./ContactFormSection.module.css"
import { useRef } from "react";

export default function ContactFormSection(){
    return(
        <div className={style.container}>
            <h1 className={style.title}>Contact Form</h1>
            <div className={style.FormInfo}>
                <input className={style.input} type="text" placeholder="Your Name"/>
                <input className={style.input} type="text" placeholder="Your Email"/>
                <input className={style.input} type="text" placeholder="Subject"/>
                <textarea className={style.textarea} name="" id="" placeholder="Message"></textarea>
            </div>
            <button className={style.btn}>Send Message</button>
        </div>
    )
}