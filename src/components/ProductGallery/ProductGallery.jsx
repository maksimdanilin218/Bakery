import style from "./ProductGallery.module.css"
import CategoryTabs from "./CategoryTabs/CategoryTabs.jsx"
import Gallary from "./Gallary/Gallary.jsx"

export default function ProductGallery(){
    return(
        <section className={style.ProductGallary}>
            <h1 className={style.title}>Explore More</h1>
            <CategoryTabs />
            {/* <Gallary /> */}
        </section>
    )
}