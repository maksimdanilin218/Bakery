import style from "./PromoBanner.module.css"

export default function PromoBanner() {
    return (
        <section className={style.PromoBanner} >
            <div className={style.container}>
                <h1 className={style.title}>20% Off  Your First Order</h1>
                <p className={style.text}>Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibenjgg.</p>
                <button className={style.button}>Learn More</button>
            </div>
        </section>
    )
}