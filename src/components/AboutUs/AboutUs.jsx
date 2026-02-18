import style from './AboutUs.module.css'

export default function AboutUs() {
    return (
        <section className={style.aboutUs}>
            <div className={style.container}>
                <h1 className={style.title}>About Us</h1>
                <p className={style.text}>Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis.</p>
                <button className={style.btn}>Read more</button>
            </div>
        </section>
    )
}