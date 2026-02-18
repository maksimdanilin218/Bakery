import "./MenuItem.css"

export default function MenuItem (props){
    return(
        <div className="MenuItem">
            <li>{props.title}</li>
        </div>
    )
}