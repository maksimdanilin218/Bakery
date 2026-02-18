import style from './FooterAboutUs.module.css'

export default function AboutUs(){
    return(
        <div className={style.aboutUs}>
            <h1 className={style.title}>About Us</h1>
            <p className={style.text}>(456) 789-12301</p>
            <p className={style.text}>info@modrino.co.uk</p>
            <p className={style.text}>South 13th street</p>
            <p className={style.text}>New york America</p>
        </div>
    )
}