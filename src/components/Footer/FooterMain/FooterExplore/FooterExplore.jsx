import style from './FooterExplore.module.css'

export default function FooterExplore (){
    return(
        <div className={style.explore}>
            <h1 className={style.title}>Explore</h1>
            <p className={style.text}>Home</p>
            <p className={style.text}>Blog</p>
            <p className={style.text}>Contact Us</p>
            <p className={style.text}>Services</p>
        </div>
    )
}