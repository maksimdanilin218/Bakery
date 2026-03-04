import style from "./ServiceBanner.module.css"

export default function ServiceBanner() {
    return (
        <div className={style.Container}>
            <div className={style.info}>
                <h1 className={style.title}>Our Bakery Service</h1>
                <p className={style.text}>Discover the service we offer to make your bakery experience even better.From custom cakes to special orders, we`re here to help with all your baking needs. </p>
            </div>
        </div>
    )
}