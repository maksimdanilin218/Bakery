import "./Head.css"
import HeadMenu from "./HeadMenu/HeadMenu.jsx"
import MobileMenu from "./MobileMenu/MobileMenu.jsx"
import HeadInfo from "./HeadInfo/HeadInfo.jsx"

export default function Head (){
    return(
        <div className="Head">
            <HeadMenu id="MenuDesktop"/>
            <MobileMenu id="MenuMobile"/>
            <HeadInfo />
        </div>
    )
}