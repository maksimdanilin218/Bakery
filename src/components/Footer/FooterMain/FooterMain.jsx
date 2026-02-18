import style from './FooterMain.module.css'
import AboutUs from './FooterAboutUs/FooterAboutUs.jsx'
import FooterExplore from './FooterExplore/FooterExplore.jsx'
import FooterNews from './FooterNews/FooterNews.jsx'

export default function FooterMain() {
    return (
        <div className={style.footerMain}>
            <AboutUs />
            <FooterExplore />
            <FooterNews />
        </div>
    )
}