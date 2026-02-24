import style from './HomeComponent.module.css'
import HeadInfo from './HeadInfo/HeadInfo'
import Product from './Product/Product'
import PromoBanner from './PromoBanner/PromoBanner'
import ProductGallery from './ProductGallery/ProductGallery'
import AboutUs from './AboutUs/AboutUs'
import Featured from './Featured/Featured'



export default function HomeComponent() {
    return (
        <div className={style.container}>
            <div className={style.HeadInfo}>
                <HeadInfo />
            </div>
            <Product />
            <PromoBanner />
            <ProductGallery />
            <AboutUs />
            <Featured />
        </div>
    )
}