import style from './Footer.module.css'
import FooterTop from './FooterTop/FooterTop.jsx'
import FooterMain from './FooterMain/FooterMain.jsx'

export default function Footer(){
    return(
        <div className={style.footer}>
            <FooterTop className={style.footerTop}/>
            <hr  className={style.hr}/>
            <FooterMain className={style.footerMain}/>
            <h1 className={style.title}>© 2024 Bake House. All rights reserved</h1>
        </div>
    )
}