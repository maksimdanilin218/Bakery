import "./Head.css"
import HeadMenu from "./HeadMenu/HeadMenu.jsx"
import HeadInfo from "./HeadInfo/HeadInfo.jsx"

export default function Head (){
    return(
        <div className="Head">
            <HeadMenu />
            <HeadInfo />
        </div>
    )
}