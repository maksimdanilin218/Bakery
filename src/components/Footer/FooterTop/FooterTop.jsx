import style from './FooterTop.module.css'
import logo from "/img/newLogo.png"



export default function FooterTop() {
    return (
        <div className={style.footerTop}>
            <img src={logo} alt="" className={style.img} />
            <div className={style.link}>
                <p className={style.text}>Follow Us:</p>
                <div className={style.iconContainer}>
                    <img className={style.icon} src="./img/Footer/link1.svg" alt="" />
                    <img className={style.icon} src="./img/Footer/link2.svg" alt="" />
                    <img className={style.icon} src="./img/Footer/link3.svg" alt="" />
                    <img className={style.icon} src="./img/Footer/link4.svg" alt="" />
                </div>
            </div>
        </div>
    )
}